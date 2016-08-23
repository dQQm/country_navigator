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
        
        countriesViewService.getCountrieInfoData ($stateParams)
            .then( function(result) {
                    $scope.countrieInfoData = result;
        });
       

    }

}(angular));