(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('countriesViewService', countriesViewService);

    countriesViewService.$inject = ['$http', 'countriesInfo', '$q'];

    function countriesViewService($http, countriesInfo, $q) {
        return {
            getCountrieInfo:getCountrieInfo
        };
        function getCountrieInfo(countrieName) {
            var defer = $q.defer();
            countriesInfo = countriesInfo.data;
            countrieName = countrieName.countrieName;
            let result =  _.filter(countriesInfo, { 'countrieName': countrieName});
            defer.resolve(result);

            return defer.promise;
        }
    }


}(angular));