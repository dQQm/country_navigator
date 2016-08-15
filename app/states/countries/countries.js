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
                url: '/countries',
                template: '<countries></countries>'
            });
    }

    function countries() {
        var directive = {
            templateUrl: './states/countries/countries.html',
            restrict: 'E',
            controller: controller
        };

        return directive;
    }

    controller.$inject = ['$scope','countriesInfo'];
    function controller($scope, countriesInfo) {
        $scope.rows = countriesInfo.data;
        $scope.columns = Object.keys($scope.rows[0]);
        $scope.titles = countriesInfo.columns;
    }

} (angular));