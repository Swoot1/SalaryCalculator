<?php


namespace Application\Calculators;


use Application\Person;

class OwnFeesPercentageCalculator {

   /**
    * @var \Application\Person
    */
   private $person;

   public function __construct(Person $person){

      $this->person = $person;
   }
   /**
    * Returns own fee percentage in decimal form (procent i decimalform för att räkna ut egenavgift) based on the persons age and seven days of "karens".
    * // Could also be better if number of "karensdagar" could be chosen. // TODO
    * https://www.skatteverket.se/foretagorganisationer/arbetsgivare/socialavgifter/egenavgifter.4.233f91f71260075abe8800020987.html
    * // Could also be better if nedsättningsbelopp av egenavgifter was added http://www.skatteverket.se/hjalptexter/EfInk1bNedsattEa.html
    * @internal param \Person $person
    * @return float|int
    */
   public function getOwnFeePercentageInDecimalForm(){

      if ($this->isPersonYoungerThanTwentyFourYearsOld() || $this->isPersonSixtySixOrUpToSeventySevenYearsOld()){
         $percentage = 0.1021;
      } else if ($this->isPersonTwentyFourOrTwentyFiveYearsOld()){
         $percentage = 0.1488;
      } else if ($this->isPersonOlderThanSeventySevenYearsOld()){
         $percentage = 0;
      } else{
         $percentage = 0.2897;
      }

      return $percentage;
   }

   private function isPersonYoungerThanTwentyFourYearsOld(){
      return $this->person->getAge() < 24;
   }

   private function isPersonSixtySixOrUpToSeventySevenYearsOld(){
      $ageOfPerson = $this->person->getAge();

      return 66 <= $ageOfPerson && $ageOfPerson <= 77;
   }

   private function isPersonTwentyFourOrTwentyFiveYearsOld(){
      $ageOfPerson = $this->person->getAge();

      return $ageOfPerson === 24 || $ageOfPerson === 25;
   }

   private function isPersonOlderThanSeventySevenYearsOld(){
      return 77 < $this->person->getAge();
   }
} 