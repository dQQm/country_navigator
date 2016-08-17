(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('recommended', directive);

    function directive() {
        var directive = {
            templateUrl: './components/recommended/recommended.html',
            restrict: 'E',
            controller: controller,
            scope: { data: '=' }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'conf'];
    function controller($scope, conf) {
        $scope.vm = {
            showRecommended: showRecommended, 
            isEditable: [],
            editRecom: editRecom,
            deleteRecom: deleteRecom
        };


        function showRecommended(text) {

            $scope.data.push(text);
            $scope.recom = '';
        }

        function editRecom($index) {
            
            $scope.vm.isEditable[$index] = !$scope.vm.isEditable[$index];
        }

        function deleteRecom(text) {

            _.remove($scope.data, function (recom) {
                return recom === text;
            })
           
        }

    }

}(angular));