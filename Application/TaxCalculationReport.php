<?php


use Application\PHPFramework\GeneralModel;

class TaxCalculationReport extends GeneralModel {
   protected $person;
   protected $earnedIncome;
   protected $establishedEarnedIncome;
   protected $establishedBusinessExcess;
   protected $baseDeductionRoundedUpToNearestHundred;
   protected $taxableIncome;
   protected $ownFees;
   protected $municipalityTaxRoundedDownToFullCrowns = 0;
   protected $stateIncomeTax = 0;
   protected $increasedStateIncomeTax = 0;
   protected $generalRetirementFeeRoundedToClosestHundred;
   protected $generalRetirementFeeDeduction;
   protected $largestPossibleWorkTaxDeduction;
   protected $sumOfTaxes = 0;
   protected $remainingAmountAfterTaxes = 0;

   public function setPerson(Person $person){
      $this->person = $person;
   }

   /**
    * @param mixed $earnedIncome
    */
   public function setEarnedIncome($earnedIncome){
      $this->earnedIncome = $earnedIncome;
      $this->setEstablishedEarnedIncome();
   }

   public function setOwnFees($ownFees){
      $this->ownFees = $ownFees;
      $this->setSumOfTaxes();
   }

   public function setEstablishedBusinessExcess($establishedBusinessExcess){
      $this->establishedBusinessExcess = $establishedBusinessExcess;
   }

   public function getEstablishedBusinessExcess(){
      return $this->establishedBusinessExcess;
   }

   public function setBaseDeductionRoundedUpToNearestHundred($baseDeductionRoundedUpToNearestHundred){
      $this->baseDeductionRoundedUpToNearestHundred = $baseDeductionRoundedUpToNearestHundred;
   }

   public function setMunicipalityTaxRoundedDownToFullCrowns($municipalityTaxRoundedDownToFullCrowns){
      $this->municipalityTaxRoundedDownToFullCrowns = $municipalityTaxRoundedDownToFullCrowns;
      $this->setSumOfTaxes();
   }

   public function getTaxableIncome(){
      return $this->taxableIncome;
   }

   public function calculateBaseDeductionRoundedUpToNearestHundred(){
      return $this->baseDeductionRoundedUpToNearestHundred;
   }

   public function setTaxableIncome($taxableIncome){
      $this->taxableIncome = $taxableIncome;
   }

   public function setStateIncomeTax($stateIncomeTax){
      $this->stateIncomeTax = $stateIncomeTax;
      $this->setSumOfTaxes();
   }

   public function setIncreasedStateIncomeTax($increasedStateIncomeTax){
      $this->increasedStateIncomeTax = $increasedStateIncomeTax;
      $this->setSumOfTaxes();
   }

   public function setGeneralRetirementFeeRoundedToClosestHundred($generalRetirementFeeRoundedToClosestHundred){
      $this->generalRetirementFeeRoundedToClosestHundred = $generalRetirementFeeRoundedToClosestHundred;
      $this->setSumOfTaxes();
   }

   public function setGeneralRetirementFeeDeduction($generalRetirementFeeDeduction){
      $this->generalRetirementFeeDeduction = $generalRetirementFeeDeduction;
      $this->setSumOfTaxes();
   }

   /**
    * @return mixed
    */
   public function getBaseDeductionRoundedUpToNearestHundred(){
      return $this->baseDeductionRoundedUpToNearestHundred;
   }

   public function setLargestPossibleWorkTaxDeduction($largestPossibleWorkTaxDeduction){
      $this->largestPossibleWorkTaxDeduction = $largestPossibleWorkTaxDeduction;
      $this->setSumOfTaxes();
   }

   /**
    * @return mixed
    */
   public function getGeneralRetirementFeeDeduction(){
      return $this->generalRetirementFeeDeduction;
   }

   /**
    * @return mixed
    */
   public function getMunicipalityTaxRoundedDownToFullCrowns(){
      return $this->municipalityTaxRoundedDownToFullCrowns;
   }

   /**
    * @return mixed
    */
   public function getEarnedIncome(){
      return $this->earnedIncome;
   }

   private function setSumOfTaxes(){
      $this->sumOfTaxes = $this->municipalityTaxRoundedDownToFullCrowns
                          + $this->ownFees
                          + $this->stateIncomeTax
                          + $this->increasedStateIncomeTax
                          + $this->generalRetirementFeeRoundedToClosestHundred
                          - $this->generalRetirementFeeDeduction
                          - $this->largestPossibleWorkTaxDeduction;
      $this->calculateRemainingAmountAfterTaxes();
   }

   public function getEstablishedEarnedIncome(){
      return $this->establishedEarnedIncome;
   }

   /**
    * The earned income rounded down to closest hundred.
    * http://www.skatteverket.se/tw/hjalptexter14.html
    */
   private function setEstablishedEarnedIncome(){
      $this->establishedEarnedIncome = floor($this->earnedIncome / 100) * 100;
   }

   public function calculateRemainingAmountAfterTaxes(){
      $this->remainingAmountAfterTaxes = $this->establishedEarnedIncome - $this->sumOfTaxes;
   }

   public function getSumOfMunicipalityAndStateTaxes(){
      return $this->municipalityTaxRoundedDownToFullCrowns
             + $this->stateIncomeTax
             + $this->increasedStateIncomeTax;
   }

   /**
    * @return mixed
    */
   public function getPerson(){
      return $this->person;
   }

   public function getMunicipalityTaxPercentage(){
      return $this->person->getMunicipalityTaxPercentage();
   }
}