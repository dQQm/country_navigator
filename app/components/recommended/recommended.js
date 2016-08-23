(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('recommended', directive);

    function directive() {
        var directive = {
            templateUrl: './components/recommended/recommended.html',
            restrict: 'E',
            require: '^form',
            controller: controller,
            link: link,
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
            deleteRecom: deleteRecom,
            changed: changed
        };

        function showRecommended(text) {
            if (!text || text == '' || $scope.ctrl.$invalid) return;

            $scope.data.push(text);
            $scope.recom = '';

        }

        function editRecom($index) {
            
            $scope.vm.isEditable[$index] = !$scope.vm.isEditable[$index];

        }

        function deleteRecom(text) {

            // _.remove($scope.data, function (recom) {
            //     return recom === text;
            // })

            var index = $scope.data.indexOf(text)
            $scope.data.splice(index, 1);           
        }

        function changed(val, index) {
            $scope.data[index] = val;
        }
    }

    function link($scope, el, attrs, form) {
        $scope.form = form;
        $scope.ctrl = form.recommendations;
    }

}(angular));