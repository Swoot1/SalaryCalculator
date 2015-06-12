<?php

namespace Application\Calculators;

use Application\TaxCalculationReport;

class TaxableBusinessExcessCalculator{

   /**
    * Calculates taxable income (beskattningsbar förvärvsinkomst.)
    * http://www.bokforingsprogram24.se/ta-ut-lon-i-enskild-firma-sa-gor-du-egna-uttag/
    * @param TaxCalculationReport $taxCalculationReport
    * @return int
    */
   public function getTaxableBusinessExcess(TaxCalculationReport $taxCalculationReport){
      $taxableBusinessExcess           = $taxCalculationReport->getEstablishedBusinessExcess() - $taxCalculationReport->getBaseDeductionRoundedUpToNearestHundred();
      $isTaxableBusinessExcessNegative = $taxableBusinessExcess < 0;

      if ($isTaxableBusinessExcessNegative){
         $taxableBusinessExcess = 0;
      }

      return $taxableBusinessExcess;
   }
}
