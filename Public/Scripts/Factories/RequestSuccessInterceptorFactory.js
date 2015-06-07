(function () {
   angular.module('salaryCalculator').factory('RequestSuccessInterceptor', ['$q', 'AlertBoxService', function ($q, AlertBoxService) {
      var requestSuccessInterceptor = {
         response: function (response) {
            // .metadata is not set when the html template is fetched.
            var notifiers = response.data.metadata ? response.data.metadata.notificationCollection : [];

            requestSuccessInterceptor.addNotifiers(notifiers);
            response.data = response.data.data || response.data;

            return response;
         },

         addNotifiers: function (notifiers) {
            notifiers.forEach(function (notifier) {
               AlertBoxService.addAlertBox(notifier.type, notifier.message);
            });
         }
      };

      return requestSuccessInterceptor;
   }]);
})();