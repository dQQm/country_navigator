(function (angular) {
	'use strict';

	angular
	.module('app')
	.directive('reqInput', directive);

	function directive(){ 
		var directive = {
			templateUrl: './components/input/input.html',
			restrict: 'E',
			require: '^form'
		};

		return directive;

	}

}(angular))