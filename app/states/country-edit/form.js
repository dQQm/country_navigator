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

    controller.$inject = ['$scope', '$stateParams', 'countriesInfo', '$state'];
    function controller($scope, stateParams, countriesInfo, state) {
        $scope.vm = {
            data: {recomendations: []}
        };

        $scope.name = stateParams.name;

        if ($scope.name) {
            $scope.vm.data = _.find(countriesInfo.data, function (country) {
                return country.countryName.toLowerCase() === $scope.name.toLowerCase();
            });
        }

        $scope.saveData = function() {
            // countriesInfo.data.push($scope.vm.data);
            // alert("Saved!");
            state.go('countries');
        }

        

        
    }

}(angular));