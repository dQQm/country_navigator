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
                "population": 10000,
                "size": 1000010000,
                "lat":40.99959341455489,
                "lan":-74.00594130000002,
                "description": "so many descriptions",
                "recomendations": ["stuf", "one"]
            }, {
                "countryName": "Austria",
                "capitalName": "Vienna",
                "flagUrl": "http://flagpedia.net/data/flags/big/at.png",
                "language": "German",
                "currency": "Euro",
                "population": 8725931,
                "size": 83879,
                "lat":40.7127837,
                "lan":-74.00594130000002,
                "description": "Officially the Republic of Austria is a federal republic and a landlocked country of over 8.66 million people in Central Europe. It is bordered by the Czech Republic and Germany to the north, Hungary and Slovakia to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west. The territory of Austria covers 83,879 square kilometres (32,386 sq mi). Austria's terrain is highly mountainous, lying within the Alps; only 32% of the country is below 500 metres (1,640 ft), and its highest point is 3,798 metres (12,461 ft). The majority of the population speak local Bavarian dialects of German as their native language, and Austrian German in its standard form is the country's official language.Other local official languages are Hungarian, Burgenland Croatian, and Slovene.",
                "recomendations": ["stuf", "one"]
            }, {
                "countryName": "test",
                "capitalName": "testName",
                "flagUrl": "https://image.freepik.com/free-icon/freepik-logo-in-black-version_318-36111.png",
                "language": "testLanguage",
                "currency": "gold",
                "population": 10000,
                "size": 1000010000,
                "lat":40.7127837,
                "lan":-74.00594130000002,
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