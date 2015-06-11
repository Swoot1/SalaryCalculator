<?php
use Application\PHPFramework\JsonParser;

require_once 'Application/PHPFramework/IToJSON.php';
require_once 'Application/PHPFramework/GeneralModel.php';
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
require_once 'Application/Calculators/WorkTaxDeductionCalculatorForPersonSixtySixYearsOrYounger.php';
require_once 'Application/Calculators/WorkTaxDeductionCalculatorForPersonSixtySevenYearsOrOlder.php';
require_once 'Application/PHPFramework/JsonParser.php';

$jsonParser = new JsonParser();
$result     = $jsonParser->parse(file_get_contents('php://input'));
$taxCalculationReportGenerator = new TaxCalculationReportGenerator(new Person(array('birthYear' => $result['person']['birthYear'], 'municipalityTaxPercentage' => $result['person']['municipalityTaxPercentage'])), $result['earnedIncome'], new BaseAmounts());
$taxCalculationReport = $taxCalculationReportGenerator->createTaxCalculationReport();

$protocol = isset($_SERVER["SERVER_PROTOCOL"]) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0';
header(sprintf("%s %s", $protocol, '200 OK'), true, 200);
header('Charset: UTF-8');
header('Content-Type: application/json');

echo json_encode($taxCalculationReport->toArray(), JSON_UNESCAPED_UNICODE);