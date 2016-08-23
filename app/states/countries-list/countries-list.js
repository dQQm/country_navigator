(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('countriesList', countriesList)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('countriesList', {
                url: '/countries-list',
                template: '<countries-list></countries-list>'
            });
    }

    function countriesList() {
        var directive = {
            templateUrl: './states/countries-list/countries-list.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', '$state', 'countriesInfo' ];
    function controller($scope,$state, countriesInfo) {
        $scope.countries = countriesInfo.data;
        $scope.redirect = redirect;

        //redirection function pasing parameter countrieName to countrie view state
        function redirect(countrieName){
            $state.go('countrieView',{countrieName:countrieName});
        }

    }

}(angular));