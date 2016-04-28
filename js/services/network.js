'use strict';

// App Common services to use as Global.
testApp.factory('RequestService', ['$http', '$q','APP_URI',
    function($http, $q, APP_URI) {
        
        return {
            requestCall: function(requestUrl, requestData, methodType) {
                var deferred = $q.defer();

                $http({
                    method: (methodType) ? methodType : "POST",
                    url: APP_URI + requestUrl,
                    data: requestData
                })
                .then(function(result) {
                    deferred.resolve(result);
                },
                function(error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            },

            searchWeather : function(city) {
                return this.requestCall('&q='+city);
            }
        };
    }
]);