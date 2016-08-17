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
                "flagUrl": "http://simpleicon.com/wp-content/uploads/camera.png",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "lat":40.99959341455489,
                "lan":-74.00594130000002,
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
                "lat":40.7127837,
                "lan":-74.00594130000002,
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
                "lat":40.7127837,
                "lan":-74.00594130000002,
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }]
        };
    }

}(angular));