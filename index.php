<?php
require_once 'Person.php';

/**
 * Calculates own fees (egenavgifter).
 * https://www.verksamt.se/alla-e-tjanster/rakna-ut/rakna-ut-din-skatt
 * http://mralek.se/post/42279934779/hur-fungerar-egenavgifter-och-schablonavdrag
 * https://www.skatteverket.se/foretagorganisationer/arbetsgivare/socialavgifter/egenavgifter.4.233f91f71260075abe8800020987.html
 * @param Person $person
 * @return int
 */
function calculateOwnFees(Person $person){
   $selfFeePercentageInDecimalForm = getOwnFeePercentage($person) / 100;

   return calculateEstablishedBusinessExcess() * $selfFeePercentageInDecimalForm;
}

/**
 * Returns own fee percentage (procent för att räkna ut egenavgift) based on the persons age and seven days of "karens".
 * // Could also be better if number of "karensdagar" could be chosen.
 * https://www.skatteverket.se/foretagorganisationer/arbetsgivare/socialavgifter/egenavgifter.4.233f91f71260075abe8800020987.html
 * @param Person $person
 * @return float|int
 */
function getOwnFeePercentage(Person $person){

   if (isPersonYoungerThanTwentyFourYearsOld($person) || isPersonSixtySixOrUpToSeventySevenYearsOld($person)){
      $percentage = 10.21;
   } else if (isPersonTwentyFourOrTwentyFiveYearsOld($person)){
      $percentage = 14.88;
   } else if (isPersonOlderThanSeventySevenYearsOld($person)){
      $percentage = 0;
   } else{
      $percentage = 28.97;
   }

   return $percentage;
}


function isPersonYoungerThanTwentyFourYearsOld(Person $person){
   return $person->getAge() < 24;
}

function isPersonSixtySixOrUpToSeventySevenYearsOld(Person $person){
   $ageOfPerson = $person->getAge();

   return 66 <= $ageOfPerson && $ageOfPerson <= 77;
}

function isPersonTwentyFourOrTwentyFiveYearsOld(Person $person){
   $ageOfPerson = $person->getAge();

   return $ageOfPerson === 24 || $ageOfPerson === 25;
}

function isPersonOlderThanSeventySevenYearsOld(Person $person){
   return 77 < $person->getAge();
}


/**
 * Calculates the municipality tax (kommunskatt) rounded to crowns. 0.50 is rounded down to closes crown.
 * @return float
 */
function calculateMunicipalityTaxRoundedDownToFullCrowns(){
   return floor(calculateMunicipalityTax());
}

/**
 * Calculates the municipality tax (kommunskatt)
 * @return float
 */
function calculateMunicipalityTax(){
   $municipalityTaxPercentageInDecimalForm = getMunicipalityTaxPercentage() / 100;

   return $municipalityTaxPercentageInDecimalForm * getTaxableIncome();
}

function getMunicipalityTaxPercentage(){
//   return 31.86;
   return 31.65;
}

/**
 * Calculates taxable income (beskattningsbar förvärvsinkomst.)
 * http://www.bokforingsprogram24.se/ta-ut-lon-i-enskild-firma-sa-gor-du-egna-uttag/
 * @return int
 */
function getTaxableIncome(){
   $taxableIncome           = calculateEstablishedBusinessExcess() - calculateBaseDeductionRoundedUpToNearestHundred();
   $isTaxableIncomeNegative = $taxableIncome < 0;

   if ($isTaxableIncomeNegative){
      $taxableIncome = 0;
   }

   return $taxableIncome;
}

/**
 * Returns the base deduction rounded up to the nearest hundred.
 * TODO Higher for older people Det förhöjda grundavdraget som gäller för personer födda 1948 eller tidigare,
 * har höjts ytterligare. Av tabellen på sidorna 10–11 framgår det förhöjda grundavdraget http://www.skatteverket.se/download/18.3f4496fd14864cc5ac9df81/1417594984242/42521.pdf
 * @return float
 */
function calculateBaseDeductionRoundedUpToNearestHundred(){
   $baseDeduction = calculateBaseDeduction();

   return ceil($baseDeduction / 100) * 100;
}

/**
 * Calculates base deduction (grundavdrag).
 * http://sv.wikipedia.org/wiki/Grundavdrag // function could be extended check link different rules for people aged 65 and older.
 * http://www.skatteverket.se/download/18.3f4496fd14864cc5ac9f66e/1418376676038/grund_vanligt.pdf
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstortargrundavdraget.5.10010ec103545f243e8000156.html
 * @return float
 */
function calculateBaseDeduction(){
   $establishedBusinessExcess     = calculateEstablishedBusinessExcess();
   $priceBaseAmountForCurrentYear = getPriceBaseAmountForCurrentYear();

   if ($establishedBusinessExcess <= (0.99 * $priceBaseAmountForCurrentYear)){
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

/**
 * Calculates the business excess (verksamhetens överskott/ fasttälld förvärvsinkomst) (the standard deduction (schablonavdrag) has been removed to calculate this).
 * http://www.bokforingsprogram24.se/ta-ut-lon-i-enskild-firma-sa-gor-du-egna-uttag/
 * https://www.flashback.org/t1215922
 * @return int
 */
function calculateEstablishedBusinessExcess(){
   return getEstablishedEarnedIncome() - getStandardDeductionForOwnFees();
}

/**
 * Returns the standard deduction for own fees (grundavdrag för egenavgifter)
 * @return float
 */
function getStandardDeductionForOwnFees(){
   $standardDeductionInDecimalPercentage = 0.25;

   return getEstablishedEarnedIncome() * $standardDeductionInDecimalPercentage;
}

/**
 * Returns the price base amount (prisbasbelopp) for the current year.
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstortarprisbasbeloppetochinkomstbasbeloppet.5.10010ec103545f243e800031.html
 * @return int
 */
function getPriceBaseAmountForCurrentYear(){
//   return 44500;
   return 44400; // TODO change back
}


/**
 * Returns the income base amount (inkomstbasbeloppet) for the current year.
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstortarprisbasbeloppetochinkomstbasbeloppet.5.10010ec103545f243e800031.html
 */
function getIncomeBaseAmountForCurrentYear(){
   return 58100;
}

/**
 * The earned income rounded down to closest hundred.
 * http://www.skatteverket.se/tw/hjalptexter14.html
 */
function getEstablishedEarnedIncome(){
   return floor(getEarnedIncome() / 100) * 100;
}


/**
 * The sum of income after taxes - costs.
 * @return int
 */
function getEarnedIncome(){
   return 40000; //(getYearlySalaryMinusVacationSalary() + getYearlyVacationSalary());
}

/**
 * Calculates state income tax (statlig inkomstskatt).
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/narskamanbetalastatliginkomstskattochhurhogarden.5.10010ec103545f243e8000166.html
 */
function calculateStateIncomeTax(){
   $maximalStateIncomeTax       = calculateMaximalAmountOfStateIncomeTax();
   $taxableIncomeForStateIncome = getTaxableIncome() - getBreakpointAmountForStateIncomeTaxForCurrentYear();
   $isSubjectForStateIncomeTax  = $taxableIncomeForStateIncome > 0;

   if ($isSubjectForStateIncomeTax){
      $stateIncomeTax = $taxableIncomeForStateIncome * getStateIncomeTaxPercentageInDecimalForm();
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

function getStateIncomeTaxPercentageInDecimalForm(){
   return 0.20;
}

/**
 * Calculates increased state income tax (förhöjd statlig inkomstskatt).
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/narskamanbetalastatliginkomstskattochhurhogarden.5.10010ec103545f243e8000166.html
 */
function calculateIncreasedStateIncomeTax(){
   $taxableIncomeForIncreasedStateIncome = getTaxableIncome() - getBreakpointAmountForIncreasedStateIncomeTaxForCurrentYear();
   $isSubjectForIncreasedStateIncomeTax  = $taxableIncomeForIncreasedStateIncome > 0;

   if ($isSubjectForIncreasedStateIncomeTax){
      $increasedStateIncomeTax = $taxableIncomeForIncreasedStateIncome * getIncreasedStateIncomeTaxPercentageInDecimalForm();
   } else{
      $increasedStateIncomeTax = 0;
   }

   return $increasedStateIncomeTax;
}

function getBreakpointAmountForIncreasedStateIncomeTaxForCurrentYear(){
   return 616100;
}

function getIncreasedStateIncomeTaxPercentageInDecimalForm(){
   return 0.25;
}

/**
 * http://www4.skatteverket.se/rattsligvagledning/edition/2014.1/1348.html#h-Hur-beraknas-underlaget
 * @param Person $person
 * @return float
 */
function calculateGeneralRetirementFeeRoundedToClosestHundred(Person $person){
   return round((calculateGeneralRetirementFee($person) / 100), 0, PHP_ROUND_HALF_DOWN) * 100;
}

/**
 * Calculates the general retirement fee (allmänna pensionsavgiften)
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstorardenallmannapensionsavgiften.5.10010ec103545f243e800016.html
 * http://www.skatteverket.se/download/18.3f4496fd14864cc5ac9df81/1417594984242/42521.pdf
 * @param Person $person
 * @return int
 */
function calculateGeneralRetirementFee(Person $person){

   $generalRetirementFee = 0;

   if (shouldThePersonPayGeneralRetirementFee($person)){
      $maximumAmountOfEarnedIncomeSubjectToRetirementFee = getMaximumAmountOfEarnedIncomeSubjectToRetirementFee();
      $establishedBusinessExcess                         = calculateEstablishedBusinessExcess(); // TODO ska det verkligen vara business excess och inte taxable income?
      $earnedIncomeSubjectToRetirementFee                = $establishedBusinessExcess > $maximumAmountOfEarnedIncomeSubjectToRetirementFee ? $maximumAmountOfEarnedIncomeSubjectToRetirementFee : $establishedBusinessExcess;
      $generalRetirementFee                              = $earnedIncomeSubjectToRetirementFee * getGeneralRetirementFeePercentageInDecimalForm();
      $maximumAmountOfGeneralRetirementFee               = getMaximumAmountOfGeneralRetirementFeeForCurrentYear();
      $generalRetirementFeeExceedsMaximumFee             = $generalRetirementFee > $maximumAmountOfGeneralRetirementFee;

      if ($generalRetirementFeeExceedsMaximumFee){
         $generalRetirementFee = $maximumAmountOfGeneralRetirementFee;
      }
   }

   return $generalRetirementFee;
}

function shouldThePersonPayGeneralRetirementFee(Person $person){
   return isThePersonYoungerThanSeventyEightYearsOld($person) && isTheEarnedIncomeLargerThanOrTheSameAsTheMinimumAmountOfEarnedIncomeSubjectToRetirementFee();
}

function isThePersonYoungerThanSeventyEightYearsOld(Person $person){
   return $person->getAge() < 78;
}

function isTheEarnedIncomeLargerThanOrTheSameAsTheMinimumAmountOfEarnedIncomeSubjectToRetirementFee(){
   return getEarnedIncome() >= getMinimumAmountOfEarnedIncomeSubjectToRetirementFee();
}

/**
 * Calculates the maximum amount the general retirement fee can be calculated on.
 * http://www4.skatteverket.se/rattsligvagledning/edition/2014.1/1348.html#h-Hur-beraknas-underlaget
 */
function getMaximumAmountOfEarnedIncomeSubjectToRetirementFee(){
   $multiplier = 8.07;

   return getIncomeBaseAmountForCurrentYear() * $multiplier;
}

/**
 * Returns the minimum amount of income to apply retirement fee.
 * http://www4.skatteverket.se/rattsligvagledning/edition/2014.1/1348.html#h-Hur-beraknas-underlaget
 * @return int
 */
function getMinimumAmountOfEarnedIncomeSubjectToRetirementFee(){
   $decimalPercentageOfThePriceBaseAmountThatIsTheMinimumAmount = 0.423;

   return getPriceBaseAmountForCurrentYear() * $decimalPercentageOfThePriceBaseAmountThatIsTheMinimumAmount;

}

function getGeneralRetirementFeePercentageInDecimalForm(){
   return 0.07;
}

function getMaximumAmountOfGeneralRetirementFeeForCurrentYear(){
   return 32800;
}

/**
 * http://www.skatteverket.se/privat/sjalvservice/svarpavanligafragor/beloppprocentsatser/privatbeloppfaq/hurstorardenallmannapensionsavgiften.5.10010ec103545f243e800016.html
 */
function calculateGeneralRetirementFeeDeduction(Person $person){
   // can not be larger than the municipality tax
   $generalRetirementFeeDeduction                     = calculateGeneralRetirementFeeRoundedToClosestHundred($person);
   $sumOfMunicipalityAndStateTaxes                    = calculateMunicipalityTaxRoundedDownToFullCrowns() + calculateStateIncomeTax() + calculateIncreasedStateIncomeTax();
   $isGeneralRetirementFeeDeductionLargerThanTheTaxes = $generalRetirementFeeDeduction > $sumOfMunicipalityAndStateTaxes;

   if ($isGeneralRetirementFeeDeductionLargerThanTheTaxes){
      $generalRetirementFeeDeduction = $sumOfMunicipalityAndStateTaxes;
   }

   return $generalRetirementFeeDeduction;
}

/**
 * Returns the largest possible work tax deduction. The work tax deduction cannot be larger than the remainder of
 * the municipality tax.
 * @param Person $person
 * @return float|int
 */
function getLargestPossibleWorkTaxDeduction(Person $person){
   $workTaxDeduction                    = calculateWorkTaxDeduction($person);
   $maximumAllowedWorkTaxDeduction      = getMaximumWorkTaxDeduction($person);
   $isWorkTaxDeductionLargerThanAllowed = $maximumAllowedWorkTaxDeduction < $workTaxDeduction;

   if ($isWorkTaxDeductionLargerThanAllowed){
      $workTaxDeduction = $maximumAllowedWorkTaxDeduction;
   }

   return $workTaxDeduction;

}

function getMaximumWorkTaxDeduction(Person $person){
   return calculateMunicipalityTaxRoundedDownToFullCrowns() - calculateGeneralRetirementFeeDeduction($person);
}

/**
 * Calculates work tax deduction (jobbskatteavdrag)
 * http://www.skatteverket.se/download/18.3f4496fd14864cc5ac9df81/1417594984242/42521.pdf
 * @param Person $person
 * @return float|int
 */
function calculateWorkTaxDeduction(Person $person){
   if (isPersonSixtyFiveYearsOrYounger($person)){
      $workTaxDeduction = calculateWorkTaxDeductionForPersonSixtyFiveYearsOrYounger();
   } else{
      $workTaxDeduction = calculateWorkTaxDeductionForPersonSixtySixYearsOrOlder();
   }

   return $workTaxDeduction;
}

function isPersonSixtyFiveYearsOrYounger(Person $person){
   return $person->getAge() < 66;
}

function calculateWorkTaxDeductionForPersonSixtyFiveYearsOrYounger(){
   $municipalityTaxPercentageInDecimalForm = getMunicipalityTaxPercentage() / 100;

   return calculateWorkTaxDeductionBasisRoundedDownToClosestHundred() * $municipalityTaxPercentageInDecimalForm;
}

function calculateWorkTaxDeductionBasisRoundedDownToClosestHundred(){
   return floor(calculateWorkTaxDeductionBasisPersonSixtyFiveYearsOrYounger() / 100) * 100;
}

/**
 * Calculates the work tax deduction basis (underlag för jobbskatteavdrag)
 * @return float|int
 */
function calculateWorkTaxDeductionBasisPersonSixtyFiveYearsOrYounger(){
   $priceBaseAmountForCurrentYear = getPriceBaseAmountForCurrentYear();
   $baseDeduction                 = calculateBaseDeductionRoundedUpToNearestHundred();
   $establishedBusinessExcess     = calculateEstablishedBusinessExcess();

   if ($establishedBusinessExcess <= (0.91 * $priceBaseAmountForCurrentYear)){
      $workTaxDeductionBasis = $establishedBusinessExcess - $baseDeduction;
   } elseif ($establishedBusinessExcess <= (2.94 * $priceBaseAmountForCurrentYear)){
      $workTaxDeductionBasis = 0.91 * $priceBaseAmountForCurrentYear + 0.332 * ($establishedBusinessExcess - 0.91 * $priceBaseAmountForCurrentYear) - $baseDeduction;
   } elseif ($establishedBusinessExcess <= (8.08 * $priceBaseAmountForCurrentYear)){
      $workTaxDeductionBasis = 1.584 * $establishedBusinessExcess + 0.111 * ($establishedBusinessExcess - 2.94 * $priceBaseAmountForCurrentYear) - $baseDeduction;
   } else{
      $workTaxDeductionBasis = 2.155 * $priceBaseAmountForCurrentYear - $baseDeduction;
   }

   return $workTaxDeductionBasis;
}

function calculateWorkTaxDeductionForPersonSixtySixYearsOrOlder(){
   $workTaxDeduction                                   = 0;
   $breakPointAmount1ForHigherTaxes                    = 100000;
   $breakPointAmount2ForHigherTaxes                    = 300000;
   $taxPercentageInDecimalFormForAmountUpToBreakPoint  = 0.20;
   $taxPercentageInDecimalFormForAmountOverBreakPoint2 = 0.05;
   $establishedBusinessExcess                          = calculateEstablishedBusinessExcess();

   if ($establishedBusinessExcess <= $breakPointAmount1ForHigherTaxes){
      $workTaxDeduction += $establishedBusinessExcess * $taxPercentageInDecimalFormForAmountUpToBreakPoint;
   } else if ($establishedBusinessExcess <= $breakPointAmount2ForHigherTaxes){
      $workTaxDeduction = 15000 + $establishedBusinessExcess * $taxPercentageInDecimalFormForAmountOverBreakPoint2;
   } else{
      $workTaxDeduction = 30000;
   }

   return $workTaxDeduction;
}

echo "Grundavdrag: " . calculateBaseDeductionRoundedUpToNearestHundred();
echo "<br /><br />";
echo "Fastställd förvärvsinkomst: " . calculateEstablishedBusinessExcess();
echo "<br /><br />";
echo "Beskattningsbar förvärvsinkomst: " . getTaxableIncome();
echo "<br /><br />";
echo "Egenavgifter: " . calculateOwnFees(new Person());
echo "<br /><br />";
echo "Kommunskatt: " . calculateMunicipalityTaxRoundedDownToFullCrowns();
echo "<br /><br />";
echo "Statlig inkomstskatt: " . calculateStateIncomeTax();
echo "<br /><br />";
echo "Förhöjd statlig inkomstskatt: " . calculateIncreasedStateIncomeTax();
echo "<br /><br />";
echo "Skattereduktion för allmänn pensionsavgift: " . calculateGeneralRetirementFeeDeduction(new Person());
echo "<br /><br />";
echo "Skattereduktion: " . getLargestPossibleWorkTaxDeduction(new Person());
echo "<br /><br />";
echo "Summa skatter: " . ((calculateMunicipalityTaxRoundedDownToFullCrowns() + calculateStateIncomeTax() + calculateIncreasedStateIncomeTax()) - calculateGeneralRetirementFeeDeduction(new Person()) - getLargestPossibleWorkTaxDeduction(new Person()));
echo "<br /><br />";
echo "Allmän pensionsavgift: " . calculateGeneralRetirementFeeRoundedToClosestHundred(new Person());
echo "<br /><br />";
echo "Skattat och klart som du kan spendera: " . (calculateEstablishedBusinessExcess() - ((calculateMunicipalityTaxRoundedDownToFullCrowns() + calculateStateIncomeTax() + calculateIncreasedStateIncomeTax()) - calculateGeneralRetirementFeeDeduction(new Person()) - getLargestPossibleWorkTaxDeduction(new Person())));




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