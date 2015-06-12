(function () {
   angular.module('salaryCalculator').directive('alertbox', ['$compile', function ($compile) {
      return {
         restrict: 'A',
         replace: true,
         template: '<div data-alert ng-repeat="alertBox in alertBoxes" class="alert-box {{alertBox.type}}">{{alertBox.message}}<a href="" class="close" ng-click="alertBox.close()">&times</a></div>',
         link:function(){
            return {
               pre: function preLink() {
               },
               post: function postLink(scope, element) {
                  $compile(element)(scope);
               }
            };
         }
      };
   }]);
})();
