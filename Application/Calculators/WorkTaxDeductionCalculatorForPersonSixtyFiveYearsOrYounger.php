<?php


class WorkTaxDeductionCalculatorForPersonSixtyFourYearsOrYounger{

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
      $this->baseAmounts = $baseAmounts;
   }

   public function calculateWorkTaxDeduction(){
      $municipalityTaxPercentageInDecimalForm = $this->getMunicipalityTaxPercentage() / 100;

      return $this->calculateWorkTaxDeductionBasisRoundedDownToClosestHundred() * $municipalityTaxPercentageInDecimalForm;
   }

   private function calculateWorkTaxDeductionBasisRoundedDownToClosestHundred(){
      return floor($this->calculateWorkTaxDeductionBasisPersonSixtyFiveYearsOrYounger() / 100) * 100;
   }

   /**
    * Calculates the work tax deduction basis (underlag för jobbskatteavdrag)
    * @return float|int
    */
   private function calculateWorkTaxDeductionBasisPersonSixtyFiveYearsOrYounger(){
      $priceBaseAmountForCurrentYear = $this->baseAmounts->getPriceBaseAmountForCurrentYear();
      $baseDeduction                 = $this->taxCalculationReport->getBaseDeductionRoundedUpToNearestHundred();
      $establishedBusinessExcess     = $this->taxCalculationReport->getEstablishedBusinessExcess();

      if ($establishedBusinessExcess <= (0.91 * $priceBaseAmountForCurrentYear)){
         $workTaxDeductionBasis = $establishedBusinessExcess - $baseDeduction;
      } elseif ($establishedBusinessExcess <= (2.94 * $priceBaseAmountForCurrentYear)){
         $workTaxDeductionBasis = 0.91 * $priceBaseAmountForCurrentYear + 0.332 * ($establishedBusinessExcess - 0.91 * $priceBaseAmountForCurrentYear) - $baseDeduction;
      } elseif ($establishedBusinessExcess <= (8.08 * $priceBaseAmountForCurrentYear)){
         $workTaxDeductionBasis = 1.584 * $establishedBusinessExcess + 0.111 * ($establishedBusinessExcess - 2.94 * $priceBaseAmountForCurrentYear) - $baseDeduction;
      } else{
         $workTaxDeductionBasis = 2.155 * $priceBaseAmountForCurrentYear - $baseDeduction;
      }

      return $workTaxDeductionBasis;
   }

   private function getMunicipalityTaxPercentage(){ // TODO also exists in MunicipalityTaxCalculator
      return 31.86;
   }
} 