<?php

/**
 * https://lagen.nu/begrepp/Grundavdrag
 * Class BaseDeductionCalculator
 */
class BaseDeductionCalculator{

   /**
    * @var BaseAmounts
    */
   private $baseAmounts;
   /**
    * @var TaxCalculationReport
    */
   private $taxCalculationReport;

   public function __construct(BaseAmounts $baseAmounts, TaxCalculationReport $taxCalculationReport){
      $this->baseAmounts = $baseAmounts;
      $this->taxCalculationReport = $taxCalculationReport;
   }

   /**
    * Returns the base deduction rounded up to the nearest hundred.
    * TODO Higher for older people Det förhöjda grundavdraget som gäller för personer födda 1948 eller tidigare,
    * har höjts ytterligare. Av tabellen på sidorna 10–11 framgår det förhöjda grundavdraget http://www.skatteverket.se/download/18.3f4496fd14864cc5ac9df81/1417594984242/42521.pdf
    * @param TaxCalculationReport $taxCalculationReport
    * @return float
    */
   public function calculateBaseDeductionRoundedUpToNearestHundred(TaxCalculationReport $taxCalculationReport){
      $baseDeduction = $this->calculateBaseDeduction($taxCalculationReport);

      if($this->isLargerThanEstablishedBusinessExcess($baseDeduction)){
         $baseDeduction = $this->taxCalculationReport->getEstablishedBusinessExcess();
      }

      return ceil($baseDeduction / 100) * 100;
   }

   private function isLargerThanEstablishedBusinessExcess($baseDeduction){
      return $baseDeduction > $this->taxCalculationReport->getEstablishedBusinessExcess();
   }

   /**
    * Calculates base deduction (grundavdrag).
    * http://sv.wikipedia.org/wiki/Grundavdrag // function could be extended check link different rules for people aged 65 and older.
    * http://www.skatteverket.se/download/18.3f4496fd14864cc5ac9f66e/1418376676038/grund_vanligt.pdf
    * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstortargrundavdraget.5.10010ec103545f243e8000156.html
    * @param TaxCalculationReport $taxCalculationReport
    * @return float
    */
   private function calculateBaseDeduction(TaxCalculationReport $taxCalculationReport){
      $establishedBusinessExcess     = $taxCalculationReport->getEstablishedBusinessExcess();
      $priceBaseAmountForCurrentYear = $this->baseAmounts->getPriceBaseAmountForCurrentYear();

      if ($establishedBusinessExcess <= (0.99 * $this->baseAmounts->getPriceBaseAmountForCurrentYear())){
         $baseDeduction = 0.423 * $priceBaseAmountForCurrentYear;
      } else if ($establishedBusinessExcess <= (2.72 * $priceBaseAmountForCurrentYear)){
         $baseDeduction = 0.423 * $priceBaseAmountForCurrentYear + 0.2 * ($establishedBusinessExcess - 0.99 * $priceBaseAmountForCurrentYear);
      } else if ($establishedBusinessExcess <= (3.11 * $priceBaseAmountForCurrentYear)){
         $baseDeduction = 0.77 * $priceBaseAmountForCurrentYear;
      } else if ($establishedBusinessExcess <= (7.88 * $priceBaseAmountForCurrentYear)){
         $baseDeduction = 0.77 * $priceBaseAmountForCurrentYear - 0.1 * ($establishedBusinessExcess - 3.11 * $priceBaseAmountForCurrentYear);
      } else{
         $baseDeduction = 0.293 * $priceBaseAmountForCurrentYear;
      }

      return $baseDeduction;
   }
} 