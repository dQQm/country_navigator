(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('countriesViewService', countriesViewService);

    countriesViewService.$inject = ['$http', 'countriesInfo', '$q'];

    function countriesViewService($http, countriesInfo, $q) {
        return {
            getCountrieInfoData :getCountrieInfoData 
        };
        function getCountrieInfoData (params) {
            var defer = $q.defer();
            var countriesInfoData = countriesInfo.data;
            let result =  _.filter(countriesInfoData , { 'countryName': params.countrieName});
            defer.resolve(result);

            return defer.promise;
        }
    }


}(angular));