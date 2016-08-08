(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('formState', form)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('form', {
                url: '/form',
                template: '<form-state></form-state>'
            });
    }

    function form() {
        var directive = {
            templateUrl: './states/country-edit/form.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'survey'];
    function controller($scope, survey) {
        $scope.survey = survey;

        $scope.sayHi = sayHi;
        $scope.sayHi1 = sayHi1;
        $scope.sayHi2 = sayHi2;

        function sayHi() {
            alert('Hi to you ' + $scope.name + '! Give me ' + survey.getTotalNumber() + '!');
        }

        function sayHi1() {
            return 'Hi Maria!';
        }

        function sayHi2() {
            //ask the user for a string
          prompt({
            title: 'Give me a name',
            message: 'What would you like to name it?',
            input: true,
            label: 'Name',
            value: ''
          }).then(function(name){
            //the promise is resolved with the user input
            console.log('and the name is ', name);
          }); 
        }
    }

}(angular));