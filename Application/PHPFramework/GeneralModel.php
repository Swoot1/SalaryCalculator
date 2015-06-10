<?php


namespace Application\PHPFramework;


class GeneralModel implements \IToArray{
   public function toArray(){
      $modelProperties = get_object_vars($this);
      $modelProperties = $this->setPropertiesFromSubModels($modelProperties);

      return $modelProperties;
   }

   /**
    * @param array $modelProperties
    * @return array
    */
   private function setPropertiesFromSubModels(array $modelProperties){
      foreach ($modelProperties as $propertyName => $value){
         if ($value instanceof \IToArray){
            $modelProperties[$propertyName] = $value->toArray();
         }
      }

      return $modelProperties;
   }
} 