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
        $scope.search = "";
        $scope.searchResults = $scope.rows;
        $scope.currPage = 1;
        $scope.pageLenght = 5;
        $scope.sortType = 'countryName'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order

        $scope.numberOfPages = function () {
            var from = (($scope.currPage - 1) * $scope.pageLenght);
            var to = from + $scope.pageLenght;
            $scope.filteredData = $scope.searchResults.slice(from, to);
        };

        $scope.numberOfPages();

        $scope.pageChanged = function () {
            $scope.numberOfPages();
        };

        // change sorting order
        $scope.sort_by = function (newSortType, sortReverse) {
            $scope.searchResults = $scope.rows;

            if ($scope.sortType == newSortType)
                $scope.sortReverse = !$scope.sortReverse;

            if ($scope.search !== "") {
                $scope.search = $scope.search.charAt(0).toUpperCase() + $scope.search.slice(1);
                $scope.searchResults = _.filter($scope.rows, function(row) { return row.countryName.indexOf($scope.search) > -1; })
            };

            $scope.sortType = newSortType;
            $scope.searchResults = _.sortBy($scope.searchResults, function(row) { return row[newSortType]; })

            if ($scope.sortReverse == true) {
                 $scope.searchResults = $scope.searchResults.reverse();
            };
            // icon setup
            $('th i').each(function () {
                // icon reset
                $(this).removeClass().addClass('fa fa-sort');
            });
            if ($scope.sortReverse)
                $('th.' + newSortType + ' i').removeClass().addClass('fa fa-caret-down');
            else
                $('th.' + newSortType + ' i').removeClass().addClass('fa fa-caret-up');

             $scope.numberOfPages();

        };

    }

} (angular));