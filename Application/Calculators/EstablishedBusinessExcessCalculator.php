<?php

namespace Application\Calculators;

use Application\TaxCalculationReport;

class EstablishedBusinessExcessCalculator{

   /**
    * @var TaxCalculationReport
    */
   private $taxCalculationReport;

   public function __construct(TaxCalculationReport $taxCalculationReport){

      $this->taxCalculationReport = $taxCalculationReport;
   }

   /**
    * Calculates the business excess (verksamhetens överskott/ fastställd förvärvsinkomst) (the standard deduction (schablonavdrag) has been removed to calculate this).
    * http://www.bokforingsprogram24.se/ta-ut-lon-i-enskild-firma-sa-gor-du-egna-uttag/
    * https://www.flashback.org/t1215922
    * @return int
    */
   public function calculateEstablishedBusinessExcess(){
      return $this->taxCalculationReport->getEstablishedEarnedIncome() - $this->getStandardDeductionForOwnFees();
   }

   /**
    * Returns the standard deduction for own fees (grundavdrag för egenavgifter)
    * @return float
    */
   private function getStandardDeductionForOwnFees(){
      $standardDeductionInDecimalPercentage = 0.25;

      return $this->taxCalculationReport->getEstablishedEarnedIncome() * $standardDeductionInDecimalPercentage;
   }
} 