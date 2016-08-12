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
            scope: {
                rows: '=',
                columns: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope','conf'];
    function controller($scope, conf) {
        console.log($scope.conf);
    }

}(angular));