(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('countrieInfo', service);

    service.$inject = ['$http'];

    function service($http) {
        return {
            data:[{
                "countrieName": "test",
                "capitalName": "testName",
                "flagUrl": "http://example.com",
                "language": "testLanguage",
                "currencyNumber": 1,
                "currencySymbol": "gold",
                "latitude": "123",
                "longitude": "123",
                "population": 10000,
                "size": 1000008,
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test",
                "capitalName": "testName",
                "flagUrl": "http://example.com",
                "language": "testLanguage",
                "currencyNumber": 1,
                "currencySymbol": "gold",
                "latitude": "123",
                "longitude": "123",
                "population": 10000,
                "size": 1000008,
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currencyNumber": 1,
                "currencySymbol": "gold",
                "latitude": "123",
                "longitude": "123",
                "population": 10000,
                "size": 1000008,
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }]
        };
    }





}(angular));