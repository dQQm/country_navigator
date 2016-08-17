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

    controller.$inject = ['$scope','$stateParams', 'countriesInfo', 'countriesView' ];
    function controller($scope, $stateParams, countriesInfo, countriesView) {
        $scope.countries = countriesInfo.data;
        console.log(countriesView);

    }

}(angular));