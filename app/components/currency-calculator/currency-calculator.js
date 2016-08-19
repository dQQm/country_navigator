(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('currencyCalculator', directive);

    function directive() {
        var directive = {
            templateUrl: './components/currency-calculator/currency-calculator.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'conf', 'currencyConvertor'];
    function controller($scope, conf, currencyConvertor) {
        $scope.to = currencyConvertor.to;
        $scope.selectFrom = {'from':null};
        $scope.selectTo = {'to':null};
        $scope.from = currencyConvertor.from;
        $scope.quantity = {'quantity':null};
        $scope.convertIt = function convertIt(quantity, from, to){
            console.log(quantity ,from ,to);

        }
        console.log(currencyConvertor.currencyes);
    }

}(angular));