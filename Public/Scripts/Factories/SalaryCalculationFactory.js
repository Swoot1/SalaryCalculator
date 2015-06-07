(function () {
   angular.module('salaryCalculator').factory('SalaryCalculationFactory', ['$resource', function ($resource) {
      return new $resource('salarycalculations');
   }]);
})();