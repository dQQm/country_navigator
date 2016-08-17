(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('countriesInfo', countriesInfo);

    countriesInfo.$inject = ['$http'];

    function countriesInfo($http) {
        return {
            data:[{
                "countrieName": "Lenovo",
                "capitalName": "testName",
                "flagUrl": "http://www.logodesignlove.com/images/negative/wwf-logo-design.jpg",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "Samsung",
                "capitalName": "testName",
                "flagUrl": "http://seeklogo.com/images/S/s-h-i-e-l-d-logo-F89847BD30-seeklogo.com.gif",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test",
                "capitalName": "testName",
                "flagUrl": "https://image.freepik.com/free-icon/freepik-logo-in-black-version_318-36111.png",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }]
        };
    }

}(angular));