<?php


use Application\PHPFramework\GeneralModel;

class Person extends GeneralModel{
   protected $birthYear;
   protected $municipalityTaxPercentage;

   public function __construct(array $data){
      $this->birthYear                 = isset($data["birthYear"]) ? $data["birthYear"] : 1980; // TODO validation
      $this->municipalityTaxPercentage = isset($data["municipalityTaxPercentage"]) ? $data["municipalityTaxPercentage"] : 32; // TODO validation
   }

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
} 