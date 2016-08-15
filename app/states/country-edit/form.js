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
                url: '/form',
                template: '<form-state></form-state>'
            });
    }

    function form() {
        var directive = {
            templateUrl: './states/country-edit/form.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'survey'];
    function controller($scope, survey) {

    }

}(angular));