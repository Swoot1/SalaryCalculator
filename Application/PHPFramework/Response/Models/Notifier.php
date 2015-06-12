<?php

namespace Application\PHPFramework\Response\Models;

use Application\PHPFramework\Validation\Collections\ValueValidationCollection;
use Application\PHPFramework\Validation\TextValidation;
use Application\PHPFramework\GeneralModel;

class Notifier extends GeneralModel{

   const SECONDARY = 'secondary';
   const SUCCESS   = 'success';
   const WARNING   = 'warning';
   const ALERT     = 'alert';
   const INFO      = 'info';

   protected $message = '';
   protected $type = self::SUCCESS;

   protected function setUpValidation(){
      $this->setValidation(
           new ValueValidationCollection(array(
                                            new TextValidation(array('genericName' => 'Meddelande', 'propertyName' => 'message')),
                                            new TextValidation(array('genericName' => 'Typ', 'propertyName' => 'type'))
                                         )));
   }
}