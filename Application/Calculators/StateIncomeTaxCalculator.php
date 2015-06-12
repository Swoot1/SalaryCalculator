<?php

namespace Application\Calculators;

use Application\TaxCalculationReport;

class StateIncomeTaxCalculator{

   /**
    * @var TaxCalculationReport
    */
   private $taxCalculationReport;

   public function __construct(TaxCalculationReport $taxCalculationReport){

      $this->taxCalculationReport = $taxCalculationReport;
   }

   /**
    * Calculates state income tax (statlig inkomstskatt).
    * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/narskamanbetalastatliginkomstskattochhurhogarden.5.10010ec103545f243e8000166.html
    */
   public function calculateStateIncomeTax(){
      $maximalStateIncomeTax       = $this->calculateMaximalAmountOfStateIncomeTax();
      $taxableIncomeForStateIncome = $this->taxCalculationReport->getTaxableIncome() - $this->getBreakpointAmountForStateIncomeTaxForCurrentYear();
      $isSubjectForStateIncomeTax  = $taxableIncomeForStateIncome > 0;

      if ($isSubjectForStateIncomeTax){
         $stateIncomeTax = $taxableIncomeForStateIncome * $this->getStateIncomeTaxPercentageInDecimalForm();
      } else{
         $stateIncomeTax = 0;
      }

      return $stateIncomeTax > $maximalStateIncomeTax ? $maximalStateIncomeTax : $stateIncomeTax;
   }

   /**
    * Calculates the maximal amount of state income tax.
    * @return int
    */
   private function calculateMaximalAmountOfStateIncomeTax(){
      return $this->getBreakpointAmountForIncreasedStateIncomeTaxForCurrentYear() - $this->getBreakpointAmountForStateIncomeTaxForCurrentYear();
   }

   private function getBreakpointAmountForStateIncomeTaxForCurrentYear(){
      return 430200;
   }

   private function getStateIncomeTaxPercentageInDecimalForm(){
      return 0.20;
   }

   /**
    * Calculates increased state income tax (förhöjd statlig inkomstskatt).
    * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/narskamanbetalastatliginkomstskattochhurhogarden.5.10010ec103545f243e8000166.html
    */
   public function calculateIncreasedStateIncomeTax(){
      $taxableIncomeForIncreasedStateIncome = $this->taxCalculationReport->getTaxableIncome() - $this->getBreakpointAmountForIncreasedStateIncomeTaxForCurrentYear();
      $isSubjectForIncreasedStateIncomeTax  = $taxableIncomeForIncreasedStateIncome > 0;

      if ($isSubjectForIncreasedStateIncomeTax){
         $increasedStateIncomeTax = $taxableIncomeForIncreasedStateIncome * $this->getIncreasedStateIncomeTaxPercentageInDecimalForm();
      } else{
         $increasedStateIncomeTax = 0;
      }

      return $increasedStateIncomeTax;
   }

   private function getBreakpointAmountForIncreasedStateIncomeTaxForCurrentYear(){
      return 616100;
   }

   private function getIncreasedStateIncomeTaxPercentageInDecimalForm(){
      return 0.25;
   }
} 