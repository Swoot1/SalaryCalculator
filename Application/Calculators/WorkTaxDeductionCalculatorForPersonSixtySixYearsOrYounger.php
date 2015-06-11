<?php


class WorkTaxDeductionCalculatorForPersonSixtySixYearsOrYounger{

   /**
    * @var TaxCalculationReport
    */
   private $taxCalculationReport;

   public function __construct(TaxCalculationReport $taxCalculationReport){

      $this->taxCalculationReport = $taxCalculationReport;
   }

   public function calculateWorkTaxDeduction(){
      $municipalityTaxPercentageInDecimalForm = $this->taxCalculationReport->getMunicipalityTaxPercentage() / 100;

      return $this->calculateWorkTaxDeductionBasisRoundedDownToClosestHundred() * $municipalityTaxPercentageInDecimalForm;
   }

   private function calculateWorkTaxDeductionBasisRoundedDownToClosestHundred(){
      return floor($this->calculateWorkTaxDeductionBasisPersonSixtySixYearsOrYounger() / 100) * 100;
   }

   /**
    * Calculates the work tax deduction basis (underlag för jobbskatteavdrag)
    * http://www.skatteverket.se/download/18.3f4496fd14864cc5ac9df81/1417594984242/42521.pdf
    * @return float|int
    */
   private function calculateWorkTaxDeductionBasisPersonSixtySixYearsOrYounger(){
      $baseDeduction             = $this->taxCalculationReport->getBaseDeductionRoundedUpToNearestHundred();
      $establishedBusinessExcess = $this->taxCalculationReport->getEstablishedBusinessExcess();
      $breakPointAmount1         = 40404;
      $breakPointAmount2         = 130536;
      $breakPointAmount3         = 358752;

      if ($establishedBusinessExcess <= $breakPointAmount1){
         $workTaxDeductionBasis = $establishedBusinessExcess;
      } elseif ($establishedBusinessExcess <= $breakPointAmount2){
         $workTaxDeductionBasis = ($establishedBusinessExcess - $breakPointAmount1) * 0.332 + $breakPointAmount1;
      } elseif ($establishedBusinessExcess <= $breakPointAmount3){
         $workTaxDeductionBasis = ($establishedBusinessExcess - $breakPointAmount2) * 0.111 + 70329.6;
      } else{
         $workTaxDeductionBasis = 95682;
      }

      return $workTaxDeductionBasis - $baseDeduction;
   }
} 