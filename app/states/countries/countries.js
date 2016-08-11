(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('countries', countries)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('countries', {
                url: '/countries'
            });
    }

    function countries() {
        var directive = {
            templateUrl: './states/countries/countries.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'countries', 'countriesInfo', 'row', 'columns'];
    function controller($scope, countries, countriesInfo, row, columns) {
        $scope.rows = countriesInfo.data;
        $scope.columns = Object.keys($scope.rows[0]);
    }

} (angular));