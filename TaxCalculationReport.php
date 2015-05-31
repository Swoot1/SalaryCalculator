<?php


class TaxCalculationReport{
   protected $earnedIncome;
   protected $establishedEarnedIncome;
   protected $establishedBusinessExcess;
   protected $baseDeductionRoundedUpToNearestHundred;
   protected $taxableIncome;
   protected $ownFees;
   protected $municipalityTaxRoundedDownToFullCrowns;
   protected $stateIncomeTax;
   protected $increasedStateIncomeTax;
   protected $generalRetirementFeeRoundedToClosestHundred;
   protected $generalRetirementFeeDeduction;
   protected $largestPossibleWorkTaxDeduction;


   public function getSumOfTaxes(){
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
   }

   public function setIncreasedStateIncomeTax($increasedStateIncomeTax){
      $this->increasedStateIncomeTax = $increasedStateIncomeTax;
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
}