<?php

$jsonData = file_get_contents("test.json");

$jsonAsArray = json_decode($jsonData, true);

$newFormat = array();

$result = array();

foreach($jsonAsArray as $townShipData){
   $municipalityName = $townShipData['municipality'];
   unset($townShipData['municipality']);

   if(array_key_exists($municipalityName, $newFormat)){
      $newFormat[$municipalityName][] = $townShipData;
   }else{
      $newFormat[$municipalityName] = array($townShipData);
   }
}

function sortArrayAfterTownShipName($value1, $value2){

   $result = strcasecmp($value1['township'], $value2['township']);

   if($result > 0){
      $result = 1;
   }else if($result < 0){
      $result = -1;
   }

   return $result;

}

foreach($newFormat as $municipalityName => $townships){
   usort($townships, 'sortArrayAfterTownShipName');
   $result[] = array('municipality' => $municipalityName, 'townships' => $townships);
}

function sortArrayAfterMunicipalityName($value1, $value2){

   $result = strcasecmp($value1['municipality'], $value2['municipality']);

   if($result > 0){
      $result = 1;
   }else if($result < 0){
      $result = -1;
   }

   return $result;

}

usort($result, 'sortArrayAfterMunicipalityName');

file_put_contents('newFormat.json', json_encode($result, JSON_UNESCAPED_UNICODE));
 