<?php


class MunicipalityTaxCalculator{
   /**
    * Calculates the municipality tax (kommunskatt) rounded to crowns. 0.50 is rounded down to closes crown.
    * @param TaxCalculationReport $taxCalculationReport
    * @return float
    */
   public function calculateMunicipalityTaxRoundedDownToFullCrowns(TaxCalculationReport $taxCalculationReport){
      return floor($this->calculateMunicipalityTax($taxCalculationReport));
   }

   /**
    * Calculates the municipality tax (kommunskatt)
    * @param TaxCalculationReport $taxCalculationReport
    * @return float
    */
   private function calculateMunicipalityTax(TaxCalculationReport $taxCalculationReport){
      $municipalityTaxPercentageInDecimalForm = $this->getMunicipalityTaxPercentage() / 100;

      return $municipalityTaxPercentageInDecimalForm * $taxCalculationReport->getTaxableIncome();
   }

   private function getMunicipalityTaxPercentage(){
      return 31.86;
   }
}