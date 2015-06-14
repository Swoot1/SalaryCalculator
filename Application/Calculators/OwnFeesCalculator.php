<?php

namespace Application\Calculators;

use Application\Person;
use Application\TaxCalculationReport;

class OwnFeesCalculator{

   /**
    * @var OwnFeesPercentageCalculator
    */
   private $ownFeesPercentageCalculator;

   public function __construct(OwnFeesPercentageCalculator $ownFeesPercentageCalculator){
      $this->ownFeesPercentageCalculator = $ownFeesPercentageCalculator;
   }

   /**
    * Calculates own fees (egenavgifter).
    * https://www.verksamt.se/alla-e-tjanster/rakna-ut/rakna-ut-din-skatt
    * http://mralek.se/post/42279934779/hur-fungerar-egenavgifter-och-schablonavdrag
    * https://www.skatteverket.se/foretagorganisationer/arbetsgivare/socialavgifter/egenavgifter.4.233f91f71260075abe8800020987.html
    * @internal param \Person $person
    * @param TaxCalculationReport $taxCalculationReport
    * @return int
    */
   public function calculateOwnFees(TaxCalculationReport $taxCalculationReport){

      return $taxCalculationReport->getEstablishedBusinessExcess() * $this->ownFeesPercentageCalculator->getOwnFeePercentageInDecimalForm();
   }
} 