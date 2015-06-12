<?php

namespace Application\PHPFramework\Collections;

use Application\PHPFramework\IToArray;

abstract class GeneralCollection implements IToArray{

   protected $data = array();
   protected $model;

   /**
    * @param array $data
    */
   public function __construct(array $data = array()){
      foreach ($data as $modelData){
         if ($modelData instanceof $this->model){
            $this->data[] = $modelData;
         } else{
            $this->data[] = new $this->model($modelData);
         }
      }

      return $this;
   }

   /**
    * @return array
    */
   public function toArray(){
      $result = array();

      foreach ($this->data as $model){
         $result[] = $model->toArray();
      }

      return $result;
   }
}