<?php


class GeneralRetirementFeeCalculator{

   /**
    * @var TaxCalculationReport
    */
   private $taxCalculationReport;
   /**
    * @var BaseAmounts
    */
   private $baseAmounts;

   public function __construct(TaxCalculationReport $taxCalculationReport, BaseAmounts $baseAmounts){

      $this->taxCalculationReport = $taxCalculationReport;
      $this->baseAmounts          = $baseAmounts;
   }

   /**
    * http://www4.skatteverket.se/rattsligvagledning/edition/2014.1/1348.html#h-Hur-beraknas-underlaget
    * @param Person $person
    * @return float
    */
   public function calculateGeneralRetirementFeeRoundedToClosestHundred(Person $person){
      return round(($this->getLargestAllowedGeneralRetirementFee($person) / 100), 0, PHP_ROUND_HALF_DOWN) * 100;
   }

   private function getLargestAllowedGeneralRetirementFee($person){
      $maximumAmountOfGeneralRetirementFee   = $this->getMaximumAmountOfGeneralRetirementFeeForCurrentYear();
      $generalRetirementFee                  = $this->calculateGeneralRetirementFee($person);
      $generalRetirementFeeExceedsMaximumFee = $generalRetirementFee > $maximumAmountOfGeneralRetirementFee;

      if ($generalRetirementFeeExceedsMaximumFee){
         $generalRetirementFee = $maximumAmountOfGeneralRetirementFee;
      }

      return $generalRetirementFee;
   }

   /**
    * Calculates the general retirement fee (allmänna pensionsavgiften)
    * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstorardenallmannapensionsavgiften.5.10010ec103545f243e800016.html
    * http://www.skatteverket.se/download/18.3f4496fd14864cc5ac9df81/1417594984242/42521.pdf
    * @param Person $person
    * @return int
    */
   private function calculateGeneralRetirementFee(Person $person){

      $generalRetirementFee = 0;

      if ($this->shouldThePersonPayGeneralRetirementFee($person)){
         $maximumAmountOfEarnedIncomeSubjectToRetirementFee = $this->getMaximumAmountOfEarnedIncomeSubjectToRetirementFee();
         $establishedBusinessExcess                         = $this->taxCalculationReport->getEstablishedBusinessExcess();
         $earnedIncomeSubjectToRetirementFee                = $establishedBusinessExcess > $maximumAmountOfEarnedIncomeSubjectToRetirementFee ? $maximumAmountOfEarnedIncomeSubjectToRetirementFee : $establishedBusinessExcess;
         $generalRetirementFee                              = $earnedIncomeSubjectToRetirementFee * $this->getGeneralRetirementFeePercentageInDecimalForm();
      }

      return $generalRetirementFee;
   }

   private function shouldThePersonPayGeneralRetirementFee(Person $person){
      return $this->isThePersonYoungerThanSeventyEightYearsOld($person) && $this->isTheEarnedIncomeLargerThanOrTheSameAsTheMinimumAmountOfEarnedIncomeSubjectToRetirementFee();
   }

   private function isThePersonYoungerThanSeventyEightYearsOld(Person $person){
      return $person->getAge() < 78;
   }

   private function isTheEarnedIncomeLargerThanOrTheSameAsTheMinimumAmountOfEarnedIncomeSubjectToRetirementFee(){
      return $this->taxCalculationReport->getEarnedIncome() >= $this->getMinimumAmountOfEarnedIncomeSubjectToRetirementFee();
   }

   /**
    * Calculates the maximum amount the general retirement fee can be calculated on.
    * http://www4.skatteverket.se/rattsligvagledning/edition/2014.1/1348.html#h-Hur-beraknas-underlaget
    */
   private function getMaximumAmountOfEarnedIncomeSubjectToRetirementFee(){
      $multiplier = 8.07;

      return $this->baseAmounts->getIncomeBaseAmountForCurrentYear() * $multiplier;
   }

   /**
    * Returns the minimum amount of income to apply retirement fee.
    * http://www4.skatteverket.se/rattsligvagledning/edition/2014.1/1348.html#h-Hur-beraknas-underlaget
    * @return int
    */
   private function getMinimumAmountOfEarnedIncomeSubjectToRetirementFee(){
      $decimalPercentageOfThePriceBaseAmountThatIsTheMinimumAmount = 0.423;

      return $this->baseAmounts->getPriceBaseAmountForCurrentYear() * $decimalPercentageOfThePriceBaseAmountThatIsTheMinimumAmount;

   }

   private function getGeneralRetirementFeePercentageInDecimalForm(){
      return 0.07;
   }

   private function getMaximumAmountOfGeneralRetirementFeeForCurrentYear(){
      return 32800;
   }

   /**
    * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstorardenallmannapensionsavgiften.5.10010ec103545f243e800016.html
    */
   public function calculateGeneralRetirementFeeDeduction(Person $person){
      $generalRetirementFeeDeduction                     = $this->calculateGeneralRetirementFeeRoundedToClosestHundred($person);
      $sumOfMunicipalityAndStateTaxes                    = $this->taxCalculationReport->getSumOfMunicipalityAndStateTaxes();
      $isGeneralRetirementFeeDeductionLargerThanTheTaxes = $generalRetirementFeeDeduction > $sumOfMunicipalityAndStateTaxes;

      if ($isGeneralRetirementFeeDeductionLargerThanTheTaxes){
         $generalRetirementFeeDeduction = $sumOfMunicipalityAndStateTaxes;
      }

      return $generalRetirementFeeDeduction;
   }
} 