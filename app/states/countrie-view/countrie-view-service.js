(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('countriesView', countriesView);

    countriesView.$inject = ['$http', 'countriesInfo'];

    function countriesView($http, countriesInfo) {
        return {
            test:countriesInfo
        };
    }

}(angular));