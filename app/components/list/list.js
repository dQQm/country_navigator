(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('list', directive);

    function directive() {
        var directive = {
            templateUrl: './components/list/list.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'countriesInfo','columns' ,'rows','conf'];
    function controller($scope, conf) {
    }

}(angular));