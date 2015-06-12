<?php


namespace Application\PHPFramework;

use Application\PHPFramework\Validation\Collections\ValueValidationCollection;

abstract class GeneralModel implements IToArray{

   protected $_validation;

   public function __construct(array $data = array()){
      $this->setUpValidation();
      $this->setData($data);

      return $this;
   }

   protected function setValidation(ValueValidationCollection $validation){
      $this->_validation = $validation;
   }

   protected function setData(array $data){
      foreach ($data as $propertyName => $value){
         $this->setPropertyValue($propertyName, $value);
      }

      return $this;
   }

   private function setPropertyValue($propertyName, $value){
      if($this->propertyExists($propertyName)){
         $this->$propertyName = $value;
         $this->_validation->validate($propertyName, $value);
      }
   }

   private function propertyExists($propertyName){
      return property_exists($this, $propertyName);
   }

   abstract protected function setUpValidation();

   /**
    * @return array
    */
   public function toArray(){
      $modelProperties = get_object_vars($this);
      $modelProperties = $this->filterModelProperties($modelProperties);

      return $this->setPropertiesFromSubModels($modelProperties);
   }

   /**
    * @param array $modelProperties
    * @return array
    */
   private function filterModelProperties(array $modelProperties){
      foreach ($modelProperties as $propertyName => $value){
         if ($this->isInternalProperty($propertyName)){
            unset($modelProperties[$propertyName]);
         }
      }

      return $modelProperties;
   }

   /**
    * @param $propertyName
    * @return bool
    */
   private function isInternalProperty($propertyName){
      return substr($propertyName, 0, 1) === '_';
   }

   /**
    * @param array $modelProperties
    * @return array
    */
   private function setPropertiesFromSubModels(array $modelProperties){
      foreach ($modelProperties as $propertyName => $value){
         if ($value instanceof IToArray){
            $modelProperties[$propertyName] = $value->toArray();
         }
      }

      return $modelProperties;
   }
} 