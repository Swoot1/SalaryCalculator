<?php


class TaxCalculationReport{
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


   public function getSumOfMunicipalityAndStateTaxes(){
      return $this->municipalityTaxRoundedDownToFullCrowns + $this->stateIncomeTax + $this->increasedStateIncomeTax;
   }

   public function calculateTaxes(){
      return $this->municipalityTaxRoundedDownToFullCrowns + $this->stateIncomeTax + $this->increasedStateIncomeTax - $this->generalRetirementFeeDeduction - $this->largestPossibleWorkTaxDeduction;
   }

   public function calculateAmountLeftAfterTaxesAndFees(){
      return $this->establishedBusinessExcess - $this->calculateTaxes()
             - $this->generalRetirementFeeRoundedToClosestHundred
             - $this->generalRetirementFeeDeduction;
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
   }

   public function setGeneralRetirementFeeDeduction($generalRetirementFeeDeduction){
      $this->generalRetirementFeeDeduction = $generalRetirementFeeDeduction;
   }

   /**
    * @return mixed
    */
   public function getBaseDeductionRoundedUpToNearestHundred(){
      return $this->baseDeductionRoundedUpToNearestHundred;
   }

   public function setLargestPossibleWorkTaxDeduction($largestPossibleWorkTaxDeduction){
      $this->largestPossibleWorkTaxDeduction = $largestPossibleWorkTaxDeduction;
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

   public function toJSON(){
      return json_encode(get_object_vars($this));
   }

   private function setSumOfTaxes(){
      $this->sumOfTaxes = $this->getSumOfMunicipalityAndStateTaxes();
      $this->setRemainingAmountAfterTaxes();
   }

   private function setRemainingAmountAfterTaxes(){
      $this->remainingAmountAfterTaxes = $this->establishedBusinessExcess - $this->sumOfTaxes;
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
}