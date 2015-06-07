<?php
use Application\PHPFramework\JsonParser;

require_once 'Application/Person.php';
require_once 'Application/BaseAmounts.php';
require_once 'Application/Calculators/BaseDeductionCalculator.php';
require_once 'Application/Calculators/EstablishedBusinessExcessCalculator.php';
require_once 'Application/Calculators/GeneralRetirementCalculator.php';
require_once 'Application/Calculators/MunicipalityTaxCalculator.php';
require_once 'Application/Calculators/OwnFeesCalculator.php';
require_once 'Application/Calculators/StateIncomeTaxCalculator.php';
require_once 'Application/Calculators/TaxableIncomeCalculator.php';
require_once 'Application/TaxCalculationReport.php';
require_once 'Application/TaxCalculationReportGenerator.php';
require_once 'Application/Calculators/WorkTaxDeductionCalculator.php';
require_once 'Application/Calculators/WorkTaxDeductionCalculatorForPersonSixtyFiveYearsOrYounger.php';
require_once 'Application/Calculators/WorkTaxDeductionCalculatorForPersonSixtySixYearsOrOlder.php';
require_once 'Application/PHPFramework/JsonParser.php';


$jsonParser = new JsonParser();
$result     = $jsonParser->parse(file_get_contents('php://input'));
$taxCalculationReportGenerator = new TaxCalculationReportGenerator(new Person(array()), $result['earnedIncome'], new BaseAmounts());
$taxCalculationReport = $taxCalculationReportGenerator->createTaxCalculationReport();

$protocol = isset($_SERVER["SERVER_PROTOCOL"]) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0';
header(sprintf("%s %s", $protocol, '200 OK'), true, 200);
header('Charset: UTF-8');
header('Content-Type: applications/json');

echo $taxCalculationReport->toJSON();

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