<?php

namespace Application\Calculators;

use Application\TaxCalculationReport;

class EstablishedBusinessExcessCalculator{

   /**
    * @var TaxCalculationReport
    */
   private $taxCalculationReport;
   /**
    * @var OwnFeesPercentageCalculator
    */
   private $ownFeesPercentageCalculator;

   public function __construct(TaxCalculationReport $taxCalculationReport, OwnFeesPercentageCalculator $ownFeesPercentageCalculator){

      $this->taxCalculationReport        = $taxCalculationReport;
      $this->ownFeesPercentageCalculator = $ownFeesPercentageCalculator;
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
      return $this->taxCalculationReport->getEstablishedEarnedIncome() * $this->getDeductionPercentageInDecimalForm();
   }

   /**
    * The percentage of the deduction depends on the percentage that will be used calculating the own
    * fee.
    * @return float|int
    */
   private function getDeductionPercentageInDecimalForm(){
      $ownFeesPercentage = $this->ownFeesPercentageCalculator->getOwnFeePercentageInDecimalForm() * 100;

      if ($ownFeesPercentage === 0.1021){
         $percentageInDecimalForm = 0.10;
      } else if ($ownFeesPercentage === 14.88){
         $percentageInDecimalForm = 0.14;
      } else if ($ownFeesPercentage === 0){
         $percentageInDecimalForm = 0;
      } else{
         $percentageInDecimalForm = 0.25;
      }

      return $percentageInDecimalForm;
   }
} 