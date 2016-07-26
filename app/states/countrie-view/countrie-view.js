(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('hi', hi)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('countrieView', {
                url: '/countrie-view',
                template: '<countrie-view></countrie-view>'
            });
    }

    function countrieView() {
        var directive = {
            templateUrl: './states//countrie-view.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', ];
    function controller($scope, survey) {

    }

}(angular));