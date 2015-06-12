<?php

use Application\PHPFramework\ErrorHandling\Exceptions\ErrorException;

/**
 * Throws an exception when an error occurs i.e. when a variable is used but never defined.
 * http://stackoverflow.com/questions/841500/php-exceptions-vs-errors
 * @param $code
 * @param $message
 * @param $file
 * @param $line
 * @throws ErrorException
 */
function throwErrorException($code, $message, $file, $line){
   $date       = new DateTime();
   $dateString = $date->format('Y-m-d H:i:s');
   $logText    = sprintf("Message: %s\nOccurred: %s\nFile: %s\nLine: %s\n",
                         $message,
                         $dateString,
                         $file,
                         $line);

   error_log($logText, 3, UNCONTROLLED_EXCEPTIONS_LOG_PATH);

   throw new ErrorException($code, $message, $file, $line);
}

set_error_handler('throwErrorException');