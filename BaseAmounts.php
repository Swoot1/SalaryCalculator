<?php

class BaseAmounts{
   /**
    * @var $priceBaseAmountForCurrentYear
    */
   private static $priceBaseAmountForCurrentYear = 44500;

   /**
    * @var int $incomeBaseAmountForCurrentYear
    */
   private static $incomeBaseAmountForCurrentYear = 58100;

   /**
    * Returns the price base amount (prisbasbelopp) for the current year.
    * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstortarprisbasbeloppetochinkomstbasbeloppet.5.10010ec103545f243e800031.html
    * @return int
    */
   public static function getPriceBaseAmountForCurrentYear(){
      return self::$priceBaseAmountForCurrentYear;
   }


   /**
    * Returns the income base amount (inkomstbasbeloppet) for the current year.
    * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstortarprisbasbeloppetochinkomstbasbeloppet.5.10010ec103545f243e800031.html
    */
   public static function getIncomeBaseAmountForCurrentYear(){
      return self::$incomeBaseAmountForCurrentYear;
   }
}

 