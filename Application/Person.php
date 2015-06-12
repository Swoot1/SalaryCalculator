<?php

namespace Application;

use Application\PHPFramework\GeneralModel;
use Application\PHPFramework\Validation\Collections\ValueValidationCollection;
use Application\PHPFramework\Validation\FloatValidation;
use Application\PHPFramework\Validation\IntegerValidation;

class Person extends GeneralModel{
   protected $birthYear = 1980;
   protected $municipalityTaxPercentage = 32;

   /**
    * @return mixed
    */
   public function getBirthYear(){
      return $this->birthYear;
   }

   public function getAge(){
      return $this->getCurrentYear() - $this->birthYear;
   }

   private function getCurrentYear(){

      return $currentYear = date("Y");
   }

   public function getMunicipalityTaxPercentage(){
      return $this->municipalityTaxPercentage;
   }

   protected function setUpValidation(){
      $this->_validation = new ValueValidationCollection(
         array(
            new IntegerValidation(
               array(
                  'genericName'  => 'födelseår',
                  'propertyName' => 'birthYear'
               )
            ),
            new FloatValidation(
               array(
                  'genericName'      => 'kommunalskatt',
                  'propertyName'     => 'municipalityTaxPercentage',
                  'numberOfDecimals' => 2
               )
            )
         ));
   }
}