<?php

namespace Application\Calculators;

use Application\TaxCalculationReport;

class MunicipalityTaxCalculator{

   /**
    * @var TaxCalculationReport
    */
   private $taxCalculationReport;

   public function __construct(TaxCalculationReport $taxCalculationReport){

      $this->taxCalculationReport = $taxCalculationReport;
   }

   /**
    * Calculates the municipality tax (kommunskatt) rounded to crowns. 0.50 is rounded down to closes crown.
    * @return float
    */
   public function calculateMunicipalityTaxRoundedDownToFullCrowns(){
      return floor($this->calculateMunicipalityTax());
   }

   /**
    * Calculates the municipality tax (kommunskatt)
    * @return float
    */
   private function calculateMunicipalityTax(){
      $municipalityTaxPercentageInDecimalForm = $this->taxCalculationReport->getMunicipalityTaxPercentage() / 100;

      return $municipalityTaxPercentageInDecimalForm * $this->taxCalculationReport->getTaxableIncome();
   }
}