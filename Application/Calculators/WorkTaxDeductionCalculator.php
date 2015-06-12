<?php

namespace Application\Calculators;

use Application\BaseAmounts;
use Application\Person;
use Application\TaxCalculationReport;

class WorkTaxDeductionCalculator{

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
    * Returns the largest possible work tax deduction. The work tax deduction cannot be larger than the remainder of
    * the municipality tax.
    * @param Person $person
    * @return float|int
    */
   public function getLargestPossibleWorkTaxDeduction(Person $person){
      $workTaxDeduction                    = $this->calculateWorkTaxDeduction($person);
      $maximumAllowedWorkTaxDeduction      = $this->getMaximumWorkTaxDeduction($person);
      $isWorkTaxDeductionLargerThanAllowed = $maximumAllowedWorkTaxDeduction < $workTaxDeduction;

      if ($isWorkTaxDeductionLargerThanAllowed){
         $workTaxDeduction = $maximumAllowedWorkTaxDeduction;
      }

      return $workTaxDeduction;

   }

   private function getMaximumWorkTaxDeduction(){
      return $this->taxCalculationReport->getMunicipalityTaxRoundedDownToFullCrowns() - $this->taxCalculationReport->getGeneralRetirementFeeDeduction();
   }

   /**
    * Calculates work tax deduction (jobbskatteavdrag)
    * http://www.skatteverket.se/download/18.3f4496fd14864cc5ac9df81/1417594984242/42521.pdf
    * @param Person $person
    * @return float|int
    */
   private function calculateWorkTaxDeduction(Person $person){
      if ($this->isPersonSixtySixYearsOrYounger($person)){
         $calculator = new WorkTaxDeductionCalculatorForPersonSixtySixYearsOrYounger($this->taxCalculationReport, $this->baseAmounts);
      } else{
         $calculator = new WorkTaxDeductionCalculatorForPersonSixtySevenYearsOrOlder($this->taxCalculationReport);
      }

      return $calculator->calculateWorkTaxDeduction();
   }

   private function isPersonSixtySixYearsOrYounger(Person $person){
      return $person->getAge() < 67;
   }
} 