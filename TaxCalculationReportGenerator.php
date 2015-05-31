<?php


class TaxCalculationReportGenerator{

   /**
    * @var Person
    */
   private $person;
   private $earnedIncome;
   /**
    * @var BaseAmounts
    */
   private $baseAmountsForCurrentYear;

   public function __construct(Person $person, $earnedIncome, BaseAmounts $baseAmountsForCurrentYear){

      $this->person = $person;
      $this->earnedIncome = $earnedIncome;
      $this->baseAmountsForCurrentYear = $baseAmountsForCurrentYear;
   }

   public function createTaxCalculationReport(){
      $taxCalculationReport = new TaxCalculationReport();
      $taxCalculationReport->setEarnedIncome($this->earnedIncome);

      $establishedBusinessExcessCalculator = new EstablishedBusinessExcessCalculator($taxCalculationReport);
      $establishedBusinessExcess           = $establishedBusinessExcessCalculator->calculateEstablishedBusinessExcess();

      $taxCalculationReport->setEstablishedBusinessExcess($establishedBusinessExcess);

      $ownFeesCalculator = new OwnFeesCalculator($this->person);
      $ownFees           = $ownFeesCalculator->calculateOwnFees($taxCalculationReport);

      $taxCalculationReport->setOwnFees($ownFees);

      $baseDeductionCalculator                = new BaseDeductionCalculator($this->baseAmountsForCurrentYear);
      $baseDeductionRoundedUpToNearestHundred = $baseDeductionCalculator->calculateBaseDeductionRoundedUpToNearestHundred($taxCalculationReport);

      $taxCalculationReport->setBaseDeductionRoundedUpToNearestHundred($baseDeductionRoundedUpToNearestHundred);

      $taxableIncomeCalculator = new TaxableIncomeCalculator();
      $taxableIncome           = $taxableIncomeCalculator->getTaxableIncome($taxCalculationReport);

      $taxCalculationReport->setTaxableIncome($taxableIncome);

      $municipalityTaxCalculator              = new MunicipalityTaxCalculator();
      $municipalityTaxRoundedDownToFullCrowns = $municipalityTaxCalculator->calculateMunicipalityTaxRoundedDownToFullCrowns($taxCalculationReport);

      $taxCalculationReport->setMunicipalityTaxRoundedDownToFullCrowns($municipalityTaxRoundedDownToFullCrowns);

      $stateIncomeTaxCalculator = new StateIncomeTaxCalculator($taxCalculationReport);

      $stateIncomeTax = $stateIncomeTaxCalculator->calculateStateIncomeTax();
      $taxCalculationReport->setStateIncomeTax($stateIncomeTax);

      $increasedStateIncomeTax = $stateIncomeTaxCalculator->calculateIncreasedStateIncomeTax();
      $taxCalculationReport->setIncreasedStateIncomeTax($increasedStateIncomeTax);

      $generalRetirementCalculator = new GeneralRetirementFeeCalculator($taxCalculationReport, $this->baseAmountsForCurrentYear);

      $generalRetirementFeeRoundedToClosestHundred = $generalRetirementCalculator->calculateGeneralRetirementFeeRoundedToClosestHundred($this->person);
      $taxCalculationReport->setGeneralRetirementFeeRoundedToClosestHundred($generalRetirementFeeRoundedToClosestHundred);

      $generalRetirementFeeDeduction = $generalRetirementCalculator->calculateGeneralRetirementFeeDeduction($this->person);
      $taxCalculationReport->setGeneralRetirementFeeDeduction($generalRetirementFeeDeduction);

      $workTaxDeductionCalculator      = new WorkTaxDeductionCalculator($taxCalculationReport, $this->baseAmountsForCurrentYear);
      $largestPossibleWorkTaxDeduction = $workTaxDeductionCalculator->getLargestPossibleWorkTaxDeduction($this->person);
      $taxCalculationReport->setLargestPossibleWorkTaxDeduction($largestPossibleWorkTaxDeduction);

      return $taxCalculationReport;
   }
} 