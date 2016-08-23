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
        $scope.searchData ="";
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
                $scope.searchData = $scope.search.toLowerCase();
                $scope.searchResults = _.filter($scope.rows, function (row) { return row.countryName.toLowerCase().indexOf($scope.searchData) > -1 || row.capitalName.toLowerCase().indexOf($scope.searchData) > -1 || row.flagUrl.toLowerCase().indexOf($scope.searchData) > -1 || row.language.toLowerCase().indexOf($scope.searchData) > -1 || row.currency.toLowerCase().indexOf($scope.searchData) > -1 || row.population.toLowerCase().indexOf($scope.searchData) > -1 || row.size.toLowerCase().indexOf($scope.searchData) > -1 || row.description.toLowerCase().indexOf($scope.searchData) > -1;})
            };

            $scope.sortType = newSortType;
            $scope.searchResults = _.sortBy($scope.searchResults, function (row) { return row[newSortType]; })

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