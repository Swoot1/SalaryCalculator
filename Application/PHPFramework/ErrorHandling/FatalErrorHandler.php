<?php


namespace Application\PHPFramework\ErrorHandling;


function fatal_handler(){

   $error = error_get_last();

   if ($error !== NULL){
      $file    = $error['file'];
      $line    = $error['line'];
      $message = $error['message'];

      $date       = new \DateTime();
      $dateString = $date->format('Y-m-d H:i:s');
      $logText    = sprintf("Message: %s\nOccurred: %s\nFile: %s\nLine: %s\n",
                            $message,
                            $dateString,
                            $file,
                            $line);

      $uncontrolledExceptionsLogPath = $GLOBALS['$ROOT_DIR'] .'/'. UNCONTROLLED_EXCEPTIONS_LOG_PATH;
      $uncontrolledExceptionsLogPath = str_replace('candysweden', 'CandySweden', $uncontrolledExceptionsLogPath); // Ugly fix for Pascal case.
      error_log($logText, 3, $uncontrolledExceptionsLogPath);
   }

}

register_shutdown_function('Application\PHPFramework\ErrorHandling\fatal_handler');