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
        function getCountrieInfoData (countrieName) {
            var defer = $q.defer();
            var countriesInfoData = countriesInfo.data;
            countrieName = countrieName.countrieName;
            let result =  _.filter(countriesInfoData , { 'countrieName': countrieName});
            defer.resolve(result);

            return defer.promise;
        }
    }


}(angular));