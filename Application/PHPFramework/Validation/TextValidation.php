<?php
/**
 * User: Elin
 * Date: 2014-07-31
 * Time: 09:45
 */

namespace Application\PHPFramework\Validation;


use Application\PHPFramework\ErrorHandling\Exceptions\ApplicationException;

class TextValidation extends ValueValidation{

   protected $minLength = 1;
   protected $maxLength = null;

   protected function objectValidation($value){
      $this->validateText($value);
   }

   private function validateText($value){

      $result        = preg_match(sprintf('/^[A-ZÅÄÖa-zåäö0-9\"\s!#\\\\$%%&\'\(\)\*\+,\.\/:;<=>\?@^_`\{|\}~\[\]\-]{%s,%s}$/', $this->minLength, $this->maxLength), $value);
      $isInvalidText = $result === 0 || $result === false;

      if ($isInvalidText){
         throw new ApplicationException(sprintf('Ogiltigt värde för %s.', $this->genericName));
      }

      return true;
   }
} 