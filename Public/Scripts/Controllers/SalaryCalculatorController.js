(function () {
   angular.module('salaryCalculator').controller('SalaryCalculatorController', ['$scope', 'SalaryCalculationFactory', 'MunicipalityService', function ($scope, SalaryCalculationFactory, MunicipalityService) {
      var timeoutHandler;
      $scope.calculationsAreVisible = false;
      $scope.showCostsForm = false;

      $scope.personBirthYearCollection =
         (function () {
            var years = [];
            var currentYear = new Date().getFullYear();
            var year = currentYear - 18;
            var birthYearForOneHundredYearsOld = currentYear - 100;

            while (year >= birthYearForOneHundredYearsOld) {
               years.push(year);
               year--;
            }

            return years;
         })();
      var defaultAge = 35;
      var currentYear = new Date().getFullYear();
      var defaultBirthYear = (currentYear - defaultAge);
      $scope.salaryCalculation = {
         person: {
            birthYear: defaultBirthYear,
            municipalityTaxPercentage: 32
         },
         earnedIncome: 600000
      };
      $scope.test = {
         numberOfVacationDaysInAYear: 25,
         billableTimePercentage: 60,
         profitPercentageOfIncome: 20,
         hasServicePension: true
      };

      $scope.municipalityTaxInformation = {
         isMemberOfSwedishChurch: true,
         municipalityIndex: 0,
         townshipIndex: 0
      };

      $scope.municipalities = MunicipalityService.getMunicipalities();

      $scope.calculate = function () {
         clearTimeout(timeoutHandler);

         timeoutHandler = setTimeout(function () {
            var salaryCalculation = new SalaryCalculationFactory($scope.salaryCalculation);
            salaryCalculation.$save({}, function (responseData) {
               $scope.salaryCalculation = responseData;
            });
         }, 600);

      };

      $scope.calculate();

      $scope.calculateMonthlyWageAfterTaxes = function () {
         var monthlyWage;

         if (!$scope.salaryCalculation.remainingAmountAfterTaxes) {
            monthlyWage = 0;
         } else {
            monthlyWage = calculateMonthlyWageBeforeTaxesAndAfterProfit() / (1 + getVacationPercentageOfSalaryInDecimalForm()) - calculateServicePension();
         }
         return  monthlyWage;
      };

      var calculateMonthlyWageBeforeTaxesAndProfit = function () {
         var numberOfMonthsInAYear = 12;

         return $scope.salaryCalculation.remainingAmountAfterTaxes / numberOfMonthsInAYear;
      };

      var calculateMonthlyWageBeforeTaxesAndAfterProfit = function () {
         return calculateMonthlyWageBeforeTaxesAndProfit() - $scope.calculateProfitPerMonth()
      };

      var calculateServicePension = function () {
         var decimalPercentageOfSalaryForServicePension = 0.05, servicePension;

         if ($scope.test.hasServicePension) {
            servicePension = (calculateMonthlyWageBeforeTaxesAndAfterProfit() / (1 + getVacationPercentageOfSalaryInDecimalForm())) * decimalPercentageOfSalaryForServicePension;
         } else {
            servicePension = 0;
         }
         return servicePension;
      };

      var getVacationPercentageOfSalaryInDecimalForm = function () {
         var vacationDayPercentageOfSalaryInDecimalForm = 0.48;
         return $scope.test.numberOfVacationDaysInAYear * vacationDayPercentageOfSalaryInDecimalForm / 100;
      };

      $scope.calculateHourlyBillAmount = function () {
         var sum = ($scope.salaryCalculation.establishedEarnedIncome + getYearlySumOfCosts());
         var numberOfMonthsInAYear = 12;
         var numberOfHoursToBillYearly = (getNumberOfHoursToBillMonthly() * numberOfMonthsInAYear);

         return !sum ? 0 : sum / numberOfHoursToBillYearly;
      };

      var getNumberOfHoursToBillMonthly = function () {
         var billableTimePercentageInDecimalForm = $scope.test.billableTimePercentage / 100;
         var numberOfMonthsInAYear = 12;
         return billableTimePercentageInDecimalForm * getNumberOfWorkableHoursInAYear() / numberOfMonthsInAYear;
      };

      var getNumberOfWorkableHoursInAYear = function () {
         var minimumNumberOfWorkingDaysInAYear = 224;
         var actualNumberWorkingDaysInAYear = minimumNumberOfWorkingDaysInAYear - $scope.test.numberOfVacationDaysInAYear;
         var numberOfWorkingHoursInADay = 8;

         return numberOfWorkingHoursInADay * actualNumberWorkingDaysInAYear;
      };

      $scope.addCostToCostCollection = function (cost) {
         if (costExistsInCostCollection(cost) === false) {
            $scope.costCollection.push(angular.copy(cost));
         }
         clearCostForm();
      };

      var clearCostForm = function () {
         $scope.cost = {};
      };
      var costExistsInCostCollection = function (cost) {
         return $scope.costCollection.some(function (costInArray) {
            return angular.equals(cost, costInArray);
         });
      };

      var getYearlySumOfCosts = function () {
         var numberOfMonthsInAYear = 12;
         return $scope.costCollection.reduce(function (previousValue, cost) {
            return previousValue + (cost.monthlyCost * numberOfMonthsInAYear);
         }, 0);
      };

      $scope.setCalculationsAreVisible = function (visible) {
         $scope.calculationsAreVisible = visible;
      };

      $scope.setShowCostsForm = function (visible) {
         $scope.showCostsForm = visible;
      };

      $scope.deleteCostFromCostCollection = function (index) {
         $scope.costCollection.splice(index, 1);
      };

      $scope.calculateProfitPerMonth = function () {
         var profitPercentageOfIncomeInDecimalForm = $scope.test.profitPercentageOfIncome / 100;
         return profitPercentageOfIncomeInDecimalForm * calculateMonthlyWageBeforeTaxesAndProfit();
      };

      $scope.costCollection = [];

      $scope.setTownships = function (indexOfMunicipality) {
         $scope.townships = typeof indexOfMunicipality === 'undefined' ? [] : $scope.municipalities[indexOfMunicipality].townships;
      };

      $scope.setTownships($scope.municipalityTaxInformation.municipalityIndex);

      var setMunicipalityTax = function () {
         var municipalityIndex = $scope.municipalityTaxInformation.municipalityIndex;
         var townshipIndex = $scope.municipalityTaxInformation.townshipIndex;
         var taxData = $scope.municipalities[municipalityIndex].townships[townshipIndex];
         var municipalityTaxPercentage = 0;

         if ($scope.municipalityTaxInformation.isMemberOfSwedishChurch) {
            municipalityTaxPercentage = taxData.sumOfPercentagesInclChurchFeePercentage;
         } else {
            municipalityTaxPercentage = taxData.sumOfPercentagesExclChurchFeePercentage;
         }

         $scope.salaryCalculation.person.municipalityTaxPercentage = municipalityTaxPercentage;
         $scope.calculate();
      };

      setMunicipalityTax();

      var setTownShipIndexToZero = function () {
         $scope.municipalityTaxInformation.townshipIndex = 0;
         setMunicipalityTax();
      };

      $scope.$watch('municipalityTaxInformation.townshipIndex', setMunicipalityTax);
      $scope.$watch('municipalityTaxInformation.isMemberOfSwedishChurch', setMunicipalityTax);
      $scope.$watch('municipalityTaxInformation.municipalityIndex', setTownShipIndexToZero);

   }]);
})();