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
                columns: '=',
                titles: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope'];
    function controller($scope) {
        $scope.filteredData = [];
        $scope.currPage = 1;
        $scope.pageLenght = 5;

        $scope.numberOfPages = function () {
            var from = (($scope.currPage - 1) * $scope.pageLenght);
            var to = from + $scope.pageLenght;
            $scope.filteredData = $scope.rows.slice(from, to);
        };

        $scope.numberOfPages();

        $scope.pageChanged = function () {
            $scope.numberOfPages();
        };
    }

} (angular));