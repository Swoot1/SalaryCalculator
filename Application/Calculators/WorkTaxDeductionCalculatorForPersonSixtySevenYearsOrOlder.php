<?php


class WorkTaxDeductionCalculatorForPersonSixtySevenYearsOrOlder{

   /**
    * @var TaxCalculationReport
    */
   private $taxCalculationReport;

   public function __construct(TaxCalculationReport $taxCalculationReport){

      $this->taxCalculationReport = $taxCalculationReport;
   }

   public function calculateWorkTaxDeduction(){
      $workTaxDeduction                                   = 0;
      $breakPointAmount1ForHigherTaxes                    = 100000;
      $breakPointAmount2ForHigherTaxes                    = 300000;
      $taxPercentageInDecimalFormForAmountUpToBreakPoint  = 0.20;
      $taxPercentageInDecimalFormForAmountOverBreakPoint2 = 0.05;
      $establishedBusinessExcess                          = $this->taxCalculationReport->getEstablishedBusinessExcess();

      if ($establishedBusinessExcess <= $breakPointAmount1ForHigherTaxes){
         $workTaxDeduction += $establishedBusinessExcess * $taxPercentageInDecimalFormForAmountUpToBreakPoint;
      } else if ($establishedBusinessExcess <= $breakPointAmount2ForHigherTaxes){
         $workTaxDeduction = 15000 + ($establishedBusinessExcess * $taxPercentageInDecimalFormForAmountOverBreakPoint2);
      } else{
         $workTaxDeduction = 30000;
      }

      return $workTaxDeduction;
   }
} 