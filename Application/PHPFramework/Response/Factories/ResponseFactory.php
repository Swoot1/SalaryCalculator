<?php

namespace Application\PHPFramework\Response\Factories;

use Application\PHPFramework\Response\HeaderDispatcher;
use Application\PHPFramework\Response\Metadata;
use Application\PHPFramework\Response\ResponseData;
use Application\PHPFramework\Response\NotificationCollection;
use Application\PHPFramework\Response\Response;
use Application\PHPFramework\Response\StatusCodeToTextMapper;

class ResponseFactory{

   /**
    * @return Response
    */
   public function build(){
      $notificationCollection = new NotificationCollection();
      $metadata               = new Metadata($notificationCollection);
      $responseData           = new ResponseData($metadata);
      $statusCodeToTextMapper = new StatusCodeToTextMapper();
      $headerDispatcher       = new HeaderDispatcher();

      return new Response($statusCodeToTextMapper, $responseData, $headerDispatcher);
   }
} 