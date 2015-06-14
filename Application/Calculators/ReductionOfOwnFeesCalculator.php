<?php


namespace Application\Calculators;


use Application\Person;
use Application\TaxCalculationReport;

class ReductionOfOwnFeesCalculator{

   /**
    * @var \Application\TaxCalculationReport
    */
   private $taxCalculationReport;
   /**
    * @var \Application\Person
    */
   private $person;

   public function __construct(TaxCalculationReport $taxCalculationReport, Person $person){

      $this->taxCalculationReport = $taxCalculationReport;
      $this->person               = $person;
   }

   public function calculateReductionOfOwnFees(){
      $result = 0;

      $establishedBusinessExcess = $this->taxCalculationReport->getEstablishedBusinessExcess();
      $isTheEstablishedBusinessExcessValidForReductionOfOwnFees = $establishedBusinessExcess >= $this->getMinimumAmountValidForReductionOfOwnFees();

      if ($this->isPersonFromTwentySixUpToSixtyFiveYearsOld() && $isTheEstablishedBusinessExcessValidForReductionOfOwnFees){
         $reductionOfOwnFeesPercentageInDecimalForm = 0.075;
         $result = $establishedBusinessExcess * $reductionOfOwnFeesPercentageInDecimalForm;
      }

      if($this->getMaximumAmountOfReductionOfOwnFees() < $result){
         $result = $this->getMaximumAmountOfReductionOfOwnFees();
      }

      return $result;
   }

   /**
    * The deduction is only granted for people that is 25 years old up to 64 years old when entering the year.
    * This functions returns if the person fits the criteria.
    * @return bool
    */
   private function isPersonFromTwentySixUpToSixtyFiveYearsOld(){
      return $this->person->getAge() >= 26 && $this->person->getAge() <= 65;
   }

   private function getMaximumAmountOfReductionOfOwnFees(){
      return 15000;
   }

   private function getMinimumAmountValidForReductionOfOwnFees(){
      return 40001;
   }
} 