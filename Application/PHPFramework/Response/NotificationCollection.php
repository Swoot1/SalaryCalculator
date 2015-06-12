<?php

namespace Application\PHPFramework\Response;

use Application\PHPFramework\Collections\GeneralCollection;
use Application\PHPFramework\Response\Models\Notifier;

class NotificationCollection extends GeneralCollection implements INotificationCollection{
   protected $data = array();
   protected $model = 'Application\PHPFramework\Models\Notification';

   /**
    * @param Notifier $notifier
    * @return $this
    */
   public function addNotifier(Notifier $notifier){
      $this->data[] = $notifier;

      return $this;
   }
} 