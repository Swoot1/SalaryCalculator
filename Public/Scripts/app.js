(function () {
   angular.module('salaryCalculator', ['ngResource', 'ngRoute', 'ngMessages'])
      .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
         $routeProvider
            .when('/salarycalculations/new', {
               templateUrl: 'Public/Templates/salaryCalculatorCreate.html',
               controller: 'SalaryCalculatorController'
            })
            .otherwise({
               redirectTo: '/salarycalculations/new'
            });

         $httpProvider.interceptors.push('RequestErrorInterceptor');
         $httpProvider.interceptors.push('RequestSuccessInterceptor');
      }]);
})();
