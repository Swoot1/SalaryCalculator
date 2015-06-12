<?php

namespace Application\PHPFramework\ErrorHandling;


use Application\PHPFramework\Validation\Collections\ValueValidationCollection;
use Application\PHPFramework\GeneralModel;

class ErrorTrace extends GeneralModel{

   protected $message;

   protected function setUpValidation(){
      $this->setValidation(new ValueValidationCollection());
   }
}
