<?php

namespace Application\PHPFramework\Response;
use Application\PHPFramework\IToArray;


/**
 * Class Header
 * Creates and can execute a header() based on its data.
 * @package Application\PHPFramework
 */
interface IResponse{
   public function setStatusCode($code);

   /**
    * Returns a response to the user based on the objects data.
    * @return $this
    */
   public function sendResponse();

   public function setResponseData(IToArray $data);

   public function addNotifier(array $notifierData);
}