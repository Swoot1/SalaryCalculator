<?php

namespace Application\Calculators;

use Application\TaxCalculationReport;

class TaxableIncomeCalculator{
   /**
    * Calculates taxable income (beskattningsbar förvärvsinkomst.)
    * http://www.bokforingsprogram24.se/ta-ut-lon-i-enskild-firma-sa-gor-du-egna-uttag/
    * @param TaxCalculationReport $taxCalculationReport
    * @return int
    */
   public function getTaxableIncome(TaxCalculationReport $taxCalculationReport){
      $taxableIncome           = $taxCalculationReport->getEstablishedBusinessExcess() - $taxCalculationReport->calculateBaseDeductionRoundedUpToNearestHundred();
      $isTaxableIncomeNegative = $taxableIncome < 0;

      if ($isTaxableIncomeNegative){
         $taxableIncome = 0;
      }

      return $taxableIncome;
   }
}