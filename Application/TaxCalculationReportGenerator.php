<?php

namespace Application;

use Application\Calculators\BaseDeductionCalculator;
use Application\Calculators\EstablishedBusinessExcessCalculator;
use Application\Calculators\GeneralRetirementFeeCalculator;
use Application\Calculators\MunicipalityTaxCalculator;
use Application\Calculators\OwnFeesCalculator;
use Application\Calculators\OwnFeesPercentageCalculator;
use Application\Calculators\ReductionOfOwnFeesCalculator;
use Application\Calculators\StateIncomeTaxCalculator;
use Application\Calculators\TaxableIncomeCalculator;
use Application\Calculators\WorkTaxDeductionCalculator;
use Application\PHPFramework\GeneralModel;
use Application\PHPFramework\Validation\Collections\ValueValidationCollection;
use Application\PHPFramework\Validation\IntegerValidation;

class TaxCalculationReportGenerator extends GeneralModel{

   /**
    * @var Person
    */
   protected $person;
   protected $earnedIncome;
   /**
    * @var BaseAmounts
    */
   protected $baseAmountsForCurrentYear;

   public function __construct(array $data){
       parent::__construct($data);
   }

   public function createTaxCalculationReport(){
      $taxCalculationReport = new TaxCalculationReport();
      $taxCalculationReport->setPerson($this->person);
      $taxCalculationReport->setEarnedIncome($this->earnedIncome);

      $ownFeesPercentageCalculator = new OwnFeesPercentageCalculator($this->person);

      $establishedBusinessExcessCalculator = new EstablishedBusinessExcessCalculator($taxCalculationReport, $ownFeesPercentageCalculator);
      $establishedBusinessExcess           = $establishedBusinessExcessCalculator->calculateEstablishedBusinessExcess();

      $taxCalculationReport->setEstablishedBusinessExcess($establishedBusinessExcess);

      $ownFeesCalculator = new OwnFeesCalculator($ownFeesPercentageCalculator);
      $ownFees           = $ownFeesCalculator->calculateOwnFees($taxCalculationReport);

      $taxCalculationReport->setOwnFees($ownFees);

      $reductionOfOwnFeesCalculator = new ReductionOfOwnFeesCalculator($taxCalculationReport, $this->person);
      $reductionOfOwnFees = $reductionOfOwnFeesCalculator->calculateReductionOfOwnFees();
      $taxCalculationReport->setReductionOfOwnFees($reductionOfOwnFees);

      $baseDeductionCalculator                = new BaseDeductionCalculator($this->baseAmountsForCurrentYear, $taxCalculationReport);
      $baseDeductionRoundedUpToNearestHundred = $baseDeductionCalculator->calculateBaseDeductionRoundedUpToNearestHundred($taxCalculationReport);

      $taxCalculationReport->setBaseDeductionRoundedUpToNearestHundred($baseDeductionRoundedUpToNearestHundred);

      $taxableIncomeCalculator = new TaxableIncomeCalculator();
      $taxableIncome           = $taxableIncomeCalculator->getTaxableIncome($taxCalculationReport);

      $taxCalculationReport->setTaxableIncome($taxableIncome);

      $municipalityTaxCalculator              = new MunicipalityTaxCalculator($taxCalculationReport);
      $municipalityTaxRoundedDownToFullCrowns = $municipalityTaxCalculator->calculateMunicipalityTaxRoundedDownToFullCrowns();

      $taxCalculationReport->setMunicipalityTaxRoundedDownToFullCrowns($municipalityTaxRoundedDownToFullCrowns);

      $stateIncomeTaxCalculator = new StateIncomeTaxCalculator($taxCalculationReport);

      $stateIncomeTax = $stateIncomeTaxCalculator->calculateStateIncomeTax();
      $taxCalculationReport->setStateIncomeTax($stateIncomeTax);

      $increasedStateIncomeTax = $stateIncomeTaxCalculator->calculateIncreasedStateIncomeTax();
      $taxCalculationReport->setIncreasedStateIncomeTax($increasedStateIncomeTax);

      $generalRetirementCalculator = new GeneralRetirementFeeCalculator($taxCalculationReport, $this->baseAmountsForCurrentYear);

      $generalRetirementFeeRoundedToClosestHundred = $generalRetirementCalculator->calculateGeneralRetirementFeeRoundedToClosestHundred($this->person);
      $taxCalculationReport->setGeneralRetirementFeeRoundedToClosestHundred($generalRetirementFeeRoundedToClosestHundred);

      $generalRetirementFeeDeduction = $generalRetirementCalculator->calculateGeneralRetirementFeeDeduction($this->person);
      $taxCalculationReport->setGeneralRetirementFeeDeduction($generalRetirementFeeDeduction);

      $workTaxDeductionCalculator      = new WorkTaxDeductionCalculator($taxCalculationReport, $this->baseAmountsForCurrentYear);
      $largestPossibleWorkTaxDeduction = $workTaxDeductionCalculator->getLargestPossibleWorkTaxDeduction($this->person);
      $taxCalculationReport->setLargestPossibleWorkTaxDeduction($largestPossibleWorkTaxDeduction);

      return $taxCalculationReport;
   }

   protected function setUpValidation(){
      $this->_validation = new ValueValidationCollection(
         array(
            new IntegerValidation(
               array(
                  'genericName'  => 'årets beräknade inkomst efter att moms och kostnader har dragits av',
                  'propertyName' => 'earnedIncome'
               )
            ),
         )
      );
   }
} 