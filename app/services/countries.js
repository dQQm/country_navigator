(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('countriesInfo', countriesInfo);

    countriesInfo.$inject = ['$http'];

    function countriesInfo($http) {
        return {
            data:[{
                "countrieName": "test1",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test2",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test3",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            },{
                "countrieName": "test4",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test5",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test6",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            },{
                "countrieName": "test7",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test8",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test9",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            },{
                "countrieName": "test10",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test11",
                "capitalName": "testName",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countrieName": "test12",
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