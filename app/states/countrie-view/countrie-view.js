(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('countrieView', countrieView)
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
            templateUrl: './states/countrie-view/countrie-view.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope','countriesInfo' ];
    function controller($scope, countriesInfo) {
        $scope.countries = countriesInfo.data;
        console.log(countriesInfo.data);

    }

}(angular));