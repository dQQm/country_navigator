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

    controller.$inject = ['$scope', 'conf', '$filter', 'countriesInfo', '$state'];
    function controller($scope, conf, $filter, countriesInfo, $state) {
        $scope.filteredData = [];
        $scope.currPage = 1;
        $scope.pageLenght = 5;
        $scope.current = $state.current
        if ($scope.current.name === 'countries') {
            $scope.rows = countriesInfo.data;
        }/*else if ($scope.current.name === 'cities') {$scope.rows = cities.data}*/;
        $scope.columns = Object.keys($scope.rows[0]);

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