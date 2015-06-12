<?php

namespace Application\PHPFramework\Response;

use Application\PHPFramework\GeneralModel;
use Application\PHPFramework\IToArray;
use Application\PHPFramework\Validation\Collections\ValueValidationCollection;
use Application\PHPFramework\ErrorHandling\Exceptions\ApplicationException;
use Application\PHPFramework\Response\Models\Notifier;

class ResponseData extends GeneralModel{
   protected $metadata;
   protected $data;

   /**
    * @param Metadata $metadata
    */
   public function __construct(Metadata $metadata){
      $this->metadata = $metadata;

      parent::__construct();

      return $this;
   }

   protected function setUpValidation(){
      $this->setValidation(new ValueValidationCollection());
   }

   /**
    * Returns the data as a string formatted in the correct contentType.
    * @param $contentType
    * @return string
    * @throws \Application\PHPFramework\ErrorHandling\Exceptions\ApplicationException
    */
   public function getFormattedData($contentType){

      if ($contentType === 'application/json'){
         $formattedData = json_encode($this->toArray(), JSON_UNESCAPED_UNICODE);
      } else if ($contentType === 'text/html'){
         $formattedData = $this->toArray()['data'];
      } else{
         throw new ApplicationException('Ange en giltig content-type.');
      }

      return $formattedData;
   }

   public function setResponseData(IToArray $data){
      $this->data = $data;

      return $this;
   }

   public function addNotifier(Notifier $notifier){
      $this->metadata->addNotifier($notifier);

      return $this;
   }
} 