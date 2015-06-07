(function () {
   angular.module('salaryCalculator').filter('formattomoney', [function () {
      return function (viewValue) {
         return viewValue ? viewValue.toFixed(2) : '';
      }
   }]);
})();