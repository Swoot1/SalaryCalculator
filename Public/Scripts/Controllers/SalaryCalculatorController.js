(function () {
   angular.module('salaryCalculator').controller('SalaryCalculatorController', ['$scope', 'SalaryCalculationFactory', function ($scope, SalaryCalculationFactory) {
      $scope.calculationsAreVisible = false;
      $scope.showCostsForm = false;
      $scope.salaryCalculation = {
         birthYear: 1980,
         earnedIncome: 256054
      };
      $scope.test = {
         numberOfVacationDaysInAYear: 25,
         billableTimePercentage: 60,
         profitPercentageOfIncome: 10
      };

      $scope.calculate = function () {
         var salaryCalculation = new SalaryCalculationFactory($scope.salaryCalculation);
         salaryCalculation.$save({}, function (responseData) {
            $scope.salaryCalculation = responseData;
         });
      };

      $scope.calculate();

      $scope.calculateMonthlyWageAfterTaxes = function () {
         var numberOfMonthsInAYear = 12, monthlyWage;

         if (!$scope.salaryCalculation.remainingAmountAfterTaxes) {
            monthlyWage = 0;
         } else {
            monthlyWage = ($scope.salaryCalculation.remainingAmountAfterTaxes / numberOfMonthsInAYear - $scope.calculateProfitPerMonth())/(1 + getVacationPercentageOfSalaryInDecimalForm());
         }
         return  monthlyWage;
      };

      var getVacationPercentageOfSalaryInDecimalForm = function(){
         var vacationDayPercentageOfSalaryInDecimalForm = 0.48;
         return $scope.test.numberOfVacationDaysInAYear * vacationDayPercentageOfSalaryInDecimalForm/100;
      };

      $scope.calculateHourlyBillAmount = function () {
         var sum = ($scope.salaryCalculation.establishedEarnedIncome + getYearlySumOfCosts());
         var numberOfMonthsInAYear = 12;
         var numberOfHoursToBillYearly = (getNumberOfHoursToBillMonthly() * numberOfMonthsInAYear);

         return !sum ? 0 : sum / numberOfHoursToBillYearly;
      };

      var getNumberOfHoursToBillMonthly = function(){
         var billableTimePercentageInDecimalForm = $scope.test.billableTimePercentage/100;
         var numberOfMonthsInAYear = 12;
         return billableTimePercentageInDecimalForm * getNumberOfWorkableHoursInAYear() / numberOfMonthsInAYear;
      };

      var getNumberOfWorkableHoursInAYear = function(){
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
         var profitPercentageOfIncomeInDecimalForm = $scope.test.profitPercentageOfIncome/100;
         var numberOfMonthsInAYear = 12;
         return profitPercentageOfIncomeInDecimalForm * $scope.salaryCalculation.remainingAmountAfterTaxes/numberOfMonthsInAYear;
      };

      $scope.costCollection = [];
   }]);
})();