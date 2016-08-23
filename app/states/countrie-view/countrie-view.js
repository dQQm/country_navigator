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
                url: '/countrie-view/:countrieName',
                template: '<countrie-view></countrie-view>',
                patams:{
                    countrieName:null
                }
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

    controller.$inject = ['$scope','$stateParams', 'countriesInfo', 'countriesViewService' ];
    function controller($scope, $stateParams, countriesInfo, countriesViewService) {
        $scope.countries = countriesInfo.data;
        
        countriesViewService.getCountrieInfo($stateParams)
            .then( function(result) {
                    $scope.countrieInfo = result;
                    $scope.recomendations = result[0].recomendations;
                    console.log(result[0].recomendations);
        });
       

    }

}(angular));