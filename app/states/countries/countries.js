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
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope'];
    function controller($scope) {
       
    }

} (angular));