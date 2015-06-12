<?php

namespace Application\PHPFramework;


class AutoLoader{

   public function setUpAutoLoader(){

      spl_autoload_register(function ($className){
         $className = ltrim($className, '\\');
         $fileName  = '';

         if ($lastNsPos = strrpos($className, '\\')){
            $namespace = substr($className, 0, $lastNsPos);
            $className = substr($className, $lastNsPos + 1);
            $fileName  = str_replace('\\', DIRECTORY_SEPARATOR, $namespace) . DIRECTORY_SEPARATOR;
         }

         $fileName .= $className . '.php';

         require $fileName;
      });
   }
}