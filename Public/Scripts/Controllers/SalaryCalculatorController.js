(function () {
   angular.module('salaryCalculator').controller('SalaryCalculatorController', ['$scope', 'SalaryCalculationFactory', function ($scope, SalaryCalculationFactory) {
      $scope.calculationsAreVisible = false;
      $scope.showCostsForm = false;
      $scope.salaryCalculation = {
         birthYear: 1980,
         earnedIncome: 600000
      };
      $scope.test = {
         numberOfHoursToBillMonthly: 100 // TODO just dummy values atm.
      };

      $scope.calculate = function () {
         var salaryCalculation = new SalaryCalculationFactory($scope.salaryCalculation);
         salaryCalculation.$save({}, function (responseData) {
            $scope.salaryCalculation = responseData;
         });
      };

      $scope.calculate();

      $scope.calculateMonthlyWageAfterTaxes = function () {
         return !$scope.salaryCalculation.remainingAmountAfterTaxes ? 0 : $scope.salaryCalculation.remainingAmountAfterTaxes / 12;
      };

      $scope.calculateHourlyBillAmount = function () {
         var sum = ($scope.salaryCalculation.establishedEarnedIncome + getYearlySumOfCosts());
         return !sum ? 0 : sum / ($scope.test.numberOfHoursToBillMonthly * 12);
      };

      $scope.addCostToCostCollection = function (cost) {
         if (costExistsInCostCollection(cost) === false) {
            $scope.costCollection.push(angular.copy(cost));
         }

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

      $scope.deleteCostFromCostCollection = function(index){
         $scope.costCollection.splice(index, 1);
      };

      $scope.costCollection = [];
   }]);
})();