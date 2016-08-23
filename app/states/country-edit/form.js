(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('formState', form)
        .config(config);
        

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('form', {
                url: '/form/:name',
                template: '<form-state></form-state>'            
            });
    }

    function form() {
        var directive = {
            templateUrl: './states/country-edit/form.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', '$stateParams', 'countriesInfo'];
    function controller($scope, stateParams, countriesInfo) {
        $scope.vm = {
            data: {recomendations: []}
        };

        $scope.name = stateParams.name;

        if ($scope.name) {
            $scope.vm.data = _.find(countriesInfo.data, function (country) {
                return country.countryName.toLowerCase() === $scope.name.toLowerCase();
            });
        }

        $scope.saveData = function(save) {
            $scope.countrieInfo.push(save);

        }

        

        
    }

}(angular));