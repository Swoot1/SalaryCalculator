<?php
require_once 'Person.php';
require_once 'BaseAmounts.php';
require_once 'BaseDeductionCalculator.php';
require_once 'EstablishedBusinessExcessCalculator.php';
require_once 'GeneralRetirementCalculator.php';
require_once 'MunicipalityTaxCalculator.php';
require_once 'OwnFeesCalculator.php';
require_once 'StateIncomeTaxCalculator.php';
require_once 'TaxableIncomeCalculator.php';
require_once 'TaxCalculationReport.php';
require_once 'TaxCalculationReportGenerator.php';
require_once 'WorkTaxDeductionCalculator.php';
require_once 'WorkTaxDeductionCalculatorForPersonSixtyFiveYearsOrYounger.php';
require_once 'WorkTaxDeductionCalculatorForPersonSixtySixYearsOrOlder.php';

$taxCalculationReportGenerator = new TaxCalculationReportGenerator(new Person(), 20000, new BaseAmounts());

$taxCalculationReport = $taxCalculationReportGenerator->createTaxCalculationReport();

echo $taxCalculationReport->toJSON();


//echo "Grundavdrag: " . calculateBaseDeductionRoundedUpToNearestHundred();
//echo "<br /><br />";
//echo "Fastställd förvärvsinkomst: " . calculateEstablishedBusinessExcess();
//echo "<br /><br />";
//echo "Beskattningsbar förvärvsinkomst: " . getTaxableIncome();
//echo "<br /><br />";
//$ownFeesCalculator = new OwnFeesCalculator();
//echo "Egenavgifter: " . $ownFeesCalculator->calculateOwnFees(new Person());
//echo "<br /><br />";
//echo "Kommunskatt: " . calculateMunicipalityTaxRoundedDownToFullCrowns();
//echo "<br /><br />";
//echo "Statlig inkomstskatt: " . calculateStateIncomeTax();
//echo "<br /><br />";
//echo "Förhöjd statlig inkomstskatt: " . calculateIncreasedStateIncomeTax();
//echo "<br /><br />";
//echo "Skattereduktion för allmänn pensionsavgift: " . calculateGeneralRetirementFeeDeduction(new Person());
//echo "<br /><br />";
//echo "Skattereduktion: " . getLargestPossibleWorkTaxDeduction(new Person());
//echo "<br /><br />";
//echo "Summa skatter: " . ((calculateMunicipalityTaxRoundedDownToFullCrowns() + calculateStateIncomeTax() + calculateIncreasedStateIncomeTax()) - calculateGeneralRetirementFeeDeduction(new Person()) - getLargestPossibleWorkTaxDeduction(new Person()));
//echo "<br /><br />";
//echo "Allmän pensionsavgift: " . calculateGeneralRetirementFeeRoundedToClosestHundred(new Person());
//echo "<br /><br />";
//echo "Skattat och klart som du kan spendera: " . (calculateEstablishedBusinessExcess() - ((calculateMunicipalityTaxRoundedDownToFullCrowns() + calculateStateIncomeTax() + calculateIncreasedStateIncomeTax()) - calculateGeneralRetirementFeeDeduction(new Person()) - getLargestPossibleWorkTaxDeduction(new Person())));




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