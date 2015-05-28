<?php
require_once 'Person.php';

/**
 * Calculates own fees (egenavgifter).
 * https://www.verksamt.se/alla-e-tjanster/rakna-ut/rakna-ut-din-skatt
 * @param Person $person
 * @return int
 */
function calculateOwnFees(Person $person){
   $selfFeePercentageInDecimalForm = getOwnFeePercentage($person) / 100;

   return calculateBusinessExcess() * $selfFeePercentageInDecimalForm;
}

/**
 * Returns own fee percentage (procent för att räkna ut egenavgift) based on the persons age.
 * https://www.skatteverket.se/foretagorganisationer/arbetsgivare/socialavgifter/egenavgifter.4.233f91f71260075abe8800020987.html
 * @param Person $person
 * @return float|int
 */
function getOwnFeePercentage(Person $person){

   if (isPersonYoungerThanTwentyFourYearsOld($person) || isPersonSixtySixOrUpToSeventySevenYearsOld($person)){
      $percentage = 10.21;
   } else if (isPersonTwentyFiveOrTwentyFourYearsOld($person)){
      $percentage = 14.88;
   } else if (isPersonOlderThanSeventySevenYearsOld($person)){
      $percentage = 0;
   } else{
      $percentage = 28.97;
   }

   return $percentage;
}

function getCurrentYear(){

   return $currentYear = date("Y");
}

function isPersonYoungerThanTwentyFourYearsOld(Person $person){
   return (getCurrentYear() - $person->getBirthYear()) < 24;
}

function isPersonSixtySixOrUpToSeventySevenYearsOld(Person $person){
   return 66 <= (getCurrentYear() - $person->getBirthYear()) && (getCurrentYear() - $person->getBirthYear()) <= 77;
}

function isPersonTwentyFiveOrTwentyFourYearsOld(Person $person){
   return (getCurrentYear() - $person->getBirthYear()) === 24 || (getCurrentYear() - $person->getBirthYear()) === 25;
}

function isPersonOlderThanSeventySevenYearsOld(Person $person){
   return 77 < (getCurrentYear() - $person->getBirthYear());
}


/**
 * Calculates the municipality tax (kommunskatt).
 * @return float
 */
function calculateMunicipalityTax(){
   $municipalityTaxPercentageInDecimalForm = getMunicipalityTaxPercentage() / 100;

   return $municipalityTaxPercentageInDecimalForm * getTaxableIncome();
}

function getMunicipalityTaxPercentage(){
   return 31.86;
}

/**
 * Calculates taxable income (beskattningsbar förvärvsinkomst.)
 * http://www.bokforingsprogram24.se/ta-ut-lon-i-enskild-firma-sa-gor-du-egna-uttag/
 * @return int
 */
function getTaxableIncome(){
   return calculateBusinessExcess() - calculateBaseDeductionRoundedUpToNearestHundred();
}

/**
 * Returns the base deduction rounded up to the nearest hundred.
 * @return float
 */
function calculateBaseDeductionRoundedUpToNearestHundred(){
   $baseDeduction = calculateBaseDeduction();

   return ceil($baseDeduction / 100) * 100;
}

/**
 * Calculates base deduction (grundavdrag).
 * http://sv.wikipedia.org/wiki/Grundavdrag
 * http://www.skatteverket.se/download/18.3f4496fd14864cc5ac9f66e/1418376676038/grund_vanligt.pdf
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstortargrundavdraget.5.10010ec103545f243e8000156.html
 * @return float
 */
function calculateBaseDeduction(){
   $businessExcess                = calculateBusinessExcess();
   $priceBaseAmountForCurrentYear = getPriceBaseAmountForCurrentYear();

   if ($businessExcess <= (0.99 * $priceBaseAmountForCurrentYear)){
      $baseDeduction = 0.423 * $businessExcess; // TODO Can be minus
   } else if ($businessExcess <= (2.72 * $priceBaseAmountForCurrentYear)){
      $baseDeduction = 0.423 * $businessExcess + 0.2 * ($businessExcess - 0.99 * $priceBaseAmountForCurrentYear);
   } else if ($businessExcess <= (3.11 * $priceBaseAmountForCurrentYear)){
      $baseDeduction = 0.77 * $priceBaseAmountForCurrentYear;
   } else if ($businessExcess <= (7.88 * $priceBaseAmountForCurrentYear)){
      $baseDeduction = 0.77 * $priceBaseAmountForCurrentYear - 0.1 * ($businessExcess - 3.11 * $priceBaseAmountForCurrentYear);
   } else{
      $baseDeduction = 0.293 * $priceBaseAmountForCurrentYear;
   }

   return $baseDeduction;
}

/**
 * Calculates business excess (verksamhetens överskott/förvärvsinkomst).
 * http://www.bokforingsprogram24.se/ta-ut-lon-i-enskild-firma-sa-gor-du-egna-uttag/
 * @return int
 */
function calculateBusinessExcess(){
   $standardDeductionInDecimalPercentage = 0.25;

   return getYearlyProfit() - (getYearlyProfit() * $standardDeductionInDecimalPercentage);
}


/**
 * Returns the price base amount (prisbasbelopp) for the current year.
 * @return int
 */
function getPriceBaseAmountForCurrentYear(){
   return 44500;
}

/**
 * @return int
 */
function getYearlyProfit(){
   return 220000; //(getYearlySalaryMinusVacationSalary() + getYearlyVacationSalary());
}

/**
 * Calculates state income tax (statlig inkomstskatt).
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/narskamanbetalastatliginkomstskattochhurhogarden.5.10010ec103545f243e8000166.html
 */
function calculateStateIncomeTax(){
   $breakpointForStateIncomeTax           = getBreakpointAmountForStateIncomeTaxForCurrentYear();
   $maximalStateIncomeTax                 = calculateMaximalAmountOfStateIncomeTax();
   $taxableIncomeForStateIncome           = getTaxableIncome() - $breakpointForStateIncomeTax;
   $stateIncomeTaxPercentageInDecimalForm = getStateIncomeTaxPercentage() / 100;

   if ($taxableIncomeForStateIncome > 0){
      $stateIncomeTax = $taxableIncomeForStateIncome * $stateIncomeTaxPercentageInDecimalForm;
   } else{
      $stateIncomeTax = 0;
   }

   return $stateIncomeTax > $maximalStateIncomeTax ? $maximalStateIncomeTax : $stateIncomeTax;
}

/**
 * Calculates the maximal amount of state income tax.
 * @return int
 */
function calculateMaximalAmountOfStateIncomeTax(){
   return getBreakpointAmountForIncreasedStateIncomeTaxForCurrentYear() - getBreakpointAmountForStateIncomeTaxForCurrentYear();
}

function getBreakpointAmountForStateIncomeTaxForCurrentYear(){
   return 430200;
}

function getStateIncomeTaxPercentage(){
   return 20;
}

/**
 * Calculates increased state income tax (förhöjd statlig inkomstskatt).
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/narskamanbetalastatliginkomstskattochhurhogarden.5.10010ec103545f243e8000166.html
 */
function calculateIncreasedStateIncomeTax(){
   $taxableIncomeForIncreasedStateIncome           = getTaxableIncome() - getBreakpointAmountForIncreasedStateIncomeTaxForCurrentYear();
   $increasedStateIncomeTaxPercentageInDecimalForm = getStateIncomeTaxPercentage() / 100;
   $isSubjectForIncreasedStateIncomeTax            = $taxableIncomeForIncreasedStateIncome > 0;

   if ($isSubjectForIncreasedStateIncomeTax){
      $increasedStateIncomeTax = $taxableIncomeForIncreasedStateIncome * $increasedStateIncomeTaxPercentageInDecimalForm;
   } else{
      $increasedStateIncomeTax = 0;
   }

   return $increasedStateIncomeTax;
}

function getBreakpointAmountForIncreasedStateIncomeTaxForCurrentYear(){
   return 616100;
}

function getIncreasedStateIncomeTaxPercentage(){
   return 25;
}

/**
 * Calculates the general retirement fee (allmänna pensionsavgiften)
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstorardenallmannapensionsavgiften.5.10010ec103545f243e800016.html
 */
function calculateGeneralRetirementFee(){
   $generalRetirementFeePercentageInDecimalForm = getGeneralRetirementFeePercentage() / 100;

   return getTaxableIncome() * $generalRetirementFeePercentageInDecimalForm;
}

function getGeneralRetirementFeePercentage(){
   return 7;
}

function getMaximalAmountOfGeneralRetirementFeeForCurrentYear(){
   return 32800;
}


echo "Egen avgifter: " . calculateOwnFees(new Person());
echo "<br /><br />";
echo "Kommunskatt: " . calculateMunicipalityTax();
echo "<br /><br />";
echo "Statlig inkomstskatt: " . calculateStateIncomeTax();
echo "<br /><br />";
echo "Förhöjd statlig inkomstskatt: " . calculateIncreasedStateIncomeTax();
echo "<br /><br />";
echo "Summa skatter: " . (calculateOwnFees(new Person()) + calculateMunicipalityTax() + calculateStateIncomeTax() + calculateIncreasedStateIncomeTax());
echo "<br /><br />";
echo "Skattat och klart som du kan spendera: " . (getYearlyProfit() - (calculateOwnFees(new Person()) + calculateMunicipalityTax() + calculateStateIncomeTax() + calculateIncreasedStateIncomeTax()));




///**
// * https://www.verksamt.se/alla-e-tjanster/rakna-ut/rakna-ut-vad-en-anstalld-kostar?p_auth=27BPkUWM&p_p_id=tvv_webcalc_WAR_tvv_webcalc&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_tvv_webcalc_WAR_tvv_webcalc_com.sun.faces.portlet.VIEW_ID=%2Fsalary%2FcalcSalaryAge.xhtml&_tvv_webcalc_WAR_tvv_webcalc_com.sun.faces.portlet.NAME_SPACE=_tvv_webcalc_WAR_tvv_webcalc_
// * @return mixed
// */
//function calculateVacationSalaryPerMonth(){
//
//   $vacationPercentage              = 12;
//   $vacationPercentageInDecimalForm = $vacationPercentage / 100;
//   $numberOfWorkingMonthsInAYear    = 11;
//
//
//   return getMonthlySalary() * $numberOfWorkingMonthsInAYear * $vacationPercentageInDecimalForm;
//}
//
//function getNumberOfWorkingDaysInAYearMinusVacationDays(){
//   $minimumNumberOfWorkingDaysInAYear = 249;
//
//   return $minimumNumberOfWorkingDaysInAYear - getNumberOfVacationDaysInOneYear();
//}
//
//
//function getNumberOfVacationDaysInOneYear(){
//   return 25;
//}