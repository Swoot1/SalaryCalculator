<?php


class Person{
   private $birthYear;

   public function __construct(array $data){
      $this->birthYear = isset($data["birthYear"]) ? $data["birthYear"] : 1980; // TODO validation
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
} 