(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('countrieInfo', service);

    service.$inject = ['$http'];

    function countriesInfo($http) {
        return {
            data:[{
                "countrieName": "test",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
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