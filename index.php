<?php
use Application\BaseAmounts;
use Application\Person;
use Application\PHPFramework\ErrorHandling\ErrorHTTPStatusCodeFactory;
use Application\PHPFramework\ErrorHandling\Exceptions\ApplicationException;
use Application\PHPFramework\ErrorHandling\Exceptions\ControlledException;
use Application\PHPFramework\JsonParser;
use Application\PHPFramework\Response\Factories\ResponseFactory;
use Application\TaxCalculationReportGenerator;

$GLOBALS['$ROOT_DIR'] = dirname(__FILE__);

require_once 'Application/PHPFramework/Configurations/Configuration.php';

$responseFactory = new ResponseFactory();
$response        = $responseFactory->build();

try{
   $jsonParser = new JsonParser();
   $result     = $jsonParser->parse(file_get_contents('php://input'));

   if (!array_key_exists('person', $result)){
      throw new ApplicationException('Ange födelseår, kommun och församling.');
   }

   if (!array_key_exists('earnedIncome', $result)){
      throw new ApplicationException('Ange årets beräknade inkomst efter att moms och kostnader har dragits av.');
   }

   $taxCalculationReportGenerator = new TaxCalculationReportGenerator(array('person' => new Person($result['person']), 'earnedIncome' => $result['earnedIncome'], 'baseAmountsForCurrentYear' => new BaseAmounts()));
   $taxCalculationReport          = $taxCalculationReportGenerator->createTaxCalculationReport();

   $response->setResponseData($taxCalculationReport);

} catch (Exception $exception){
   $errorHTTPStatusCodeFactory = new ErrorHTTPStatusCodeFactory($exception);
   $HTTPStatusCode             = $errorHTTPStatusCodeFactory->getHTTPStatusCode();
   $responseFactory            = new ResponseFactory();
   $response                   = $responseFactory->build();
   $response->setStatusCode($HTTPStatusCode);

   $date       = new DateTime();
   $dateString = $date->format('Y-m-d H:i:s');
   $logText    = sprintf("Message: %s\nOccurred: %s\nFile: %s\nLine: %s\nTrace: %s\n\n\n\n",
                         $exception->getMessage(),
                         $dateString,
                         $exception->getFile(),
                         $exception->getLine(),
                         $exception->getTraceAsString());

   if ($exception instanceof ControlledException){
      error_log($logText, 3, CONTROLLED_EXCEPTIONS_LOG_PATH);
      $response->setResponseData(
               new Application\PHPFramework\ErrorHandling\ErrorTrace(
                  array(
                     'message' => $exception->getMessage()
                  )
               )
      );
   } else{
      error_log($logText, 3, UNCONTROLLED_EXCEPTIONS_LOG_PATH);
      $response->setResponseData(
               new Application\PHPFramework\ErrorHandling\ErrorTrace(
                  array(
                     'message' => 'Okänt fel.'
                  )
               )
      );
   }
}

$response->sendResponse();
