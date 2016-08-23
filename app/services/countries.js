(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('countriesInfo', countriesInfo);

    countriesInfo.$inject = ['$http'];

    function countriesInfo($http) {
        return {
            data:[{
                "countryName": "Bulgaria",
                "capitalName": "Sofia",
                "flagUrl": "http://img.freeflagicons.com/thumb/round_icon/bulgaria/bulgaria_640.png",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countryName": "Turkey",
                "capitalName": "Ankara",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countryName": "Romania",
                "capitalName": "Bucharest",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            },{
                "countryName": "Serbia",
                "capitalName": "Belgrad",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countryName": "Greece",
                "capitalName": "Athens",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countryName": "Macedonia",
                "capitalName": "Skopje",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            },{
                "countryName": "Hungary",
                "capitalName": "Budapest",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countryName": "Czech Republic",
                "capitalName": "Prague",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countryName": "Albania",
                "capitalName": "Tirana",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            },{
                "countryName": "Montenegro",
                "capitalName": "Podgorica",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countryName": "Bosnia and Herzegovina",
                "capitalName": "Srajevo",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countryName": "Crotia",
                "capitalName": "Zagreb",
                "flagUrl": "www.example.com",
                "language": "testLanguage",
                "currency": "gold",
                "population": "10000",
                "size": "10000 10000",
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }],columns : [{
                "title": "Country",
                "name" : "countryName",
                "type": "string"
              }, {
                "title": "Capital",
                "name" : "capitalName",
                "type": "string"
              }, {
                "title": "Flag",
                "name" : "flagUrl",
                "type": "string"
              }, {
                "title": "Language",
                "name" : "language",
                "type": "string"
              }, {
                "title": "Currency",
                "name" : "currency",
                "type": "string"
              }, {
                "title": "Population",
                "name" : "population",
                "type": "string"
              }, {
                "title": "Size",
                "name" : "size",
                "type": "string"
              }, {
                "title": "Description",
                "name" : "description",
                "type": "string"
              }, {
                "title": "Recomendations",
                "name" : "recomendations",
                "type": "string"
              }]
            
        };
    }





}(angular));