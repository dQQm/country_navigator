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
        $scope.from = currencyConvertor.from;
        $scope.vm = {data:{'selectFrom':null,
                            'selectTo':null,
                            'quantity':null,}};

        $scope.convertIt = function convertIt(quantity, from, to){
            currencyConvertor.convert(quantity, from, to)
            .then( function(result) {
                $scope.result = result;
            });  
        }
            
        
    }

}(angular));