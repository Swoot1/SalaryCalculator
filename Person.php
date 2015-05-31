<?php


class Person{
   private $birthYear = 1990; // TODO change

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