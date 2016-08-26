(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('countriesInfo', countriesInfo);

    countriesInfo.$inject = ['$http'];

    function countriesInfo($http) {
        return {
            data: [{
                "countryName": "Bulgaria",
                "capitalName": "Sofia",
                "flagUrl": "http://img.freeflagicons.com/thumb/round_icon/bulgaria/bulgaria_640.png",
                "language": "Bulgarian",
                "currency": "Lev",
                "population": 7202198,
                "size": 110994,
                "lat": 42.73388,
                "lan": 25.48583,
                "description": "Officially the Republic of Bulgaria is a country in southeastern Europe. It is bordered by Romania to the north, Serbia and Macedonia to the west, Greece and Turkey to the south, and the Black Sea to the east. With a territory of 110,994 square kilometres (42,855 sq mi), Bulgaria is Europe's 16th-largest country.",
                "recomendations": ["Eat kiselomlyako.", "Visit vitosha.", "Take bulgarian rose."]
            }, {
                    "countryName": "Austria",
                    "capitalName": "Vienna",
                    "flagUrl": "http://flagpedia.net/data/flags/big/at.png",
                    "language": "German",
                    "currency": "Euro",
                    "population": 8725931,
                    "size": 83879,
                    "lat": 48.210033,
                    "lan": 16.363449,
                    "description": "Officially the Republic of Austria is a federal republic and a landlocked country of over 8.66 million people in Central Europe. It is bordered by the Czech Republic and Germany to the north, Hungary and Slovakia to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west. The territory of Austria covers 83,879 square kilometres (32,386 sq mi). Austria's terrain is highly mountainous, lying within the Alps; only 32% of the country is below 500 metres (1,640 ft), and its highest point is 3,798 metres (12,461 ft). The majority of the population speak local Bavarian dialects of German as their native language, and Austrian German in its standard form is the country's official language.Other local official languages are Hungarian, Burgenland Croatian, and Slovene.",
                    "recomendations": ["Go to the zoo.They have pandas.", "Take a walk in the Schonbrunn gardens."]
                }, {
                    "countryName": "Romania",
                    "capitalName": "Bucharest",
                    "flagUrl": "https://image.freepik.com/free-icon/freepik-logo-in-black-version_318-36111.png",
                    "language": "testLanguage",
                    "currency": "gold",
                    "population": 10000,
                    "size": 1000010000,
                    "lat": 40.7127837,
                    "lan": -74.00594130000002,
                    "description": "so many descriptions",
                    "recomendations": ["stuf", "one"]
                }, {
                    "countryName": "Italy",
                    "capitalName": "Rome",
                    "flagUrl": "https://image.freepik.com/free-icon/freepik-logo-in-black-version_318-36111.png",
                    "language": "Italian",
                    "currency": "frogs",
                    "population": 10000,
                    "size": 1000010000,
                    "lat": 40.7127837,
                    "lan": -74.00594130000002,
                    "description": "so many descriptions",
                    "recomendations": ["stuf", "one"]
                }, {
                    "countryName": "Ukraine",
                    "capitalName": "Kiev",
                    "flagUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Ukrainian_People's_Republic_(non-official,_1917).svg/113px-Flag_of_Ukrainian_People's_Republic_(non-official,_1917).svg.png",
                    "language": "Ukrainian",
                    "currency": "hryvnia",
                    "population": 10000,
                    "size": 1000010000,
                    "lat": 40.7127837,
                    "lan": -74.00594130000002,
                    "description": "so many descriptions",
                    "recomendations": ["stuf", "one"]
                },
                {
                    "countryName": "Greece",
                    "capitalName": "Atina",
                    "flagUrl": "http://www.worldatlas.com/webimage/flags/countrys/zzzflags/grlarge.gif",
                    "language": "Greek",
                    "currency": "Euro",
                    "population": 10955000,
                    "size": 131957,
                    "lat": 39.07421,
                    "lan": 21.82431,
                    "description": "Greece is a country located in southeastern Europe. According to the 2015 census, Greece's population is approximately 10.9 million. Athens is the nation's capital and largest city, followed by Thessaloniki.",
                    "recomendations": ["Buy olives.", "Try the cuisine.", "Drink ouzo."]

            }], columns: [{
                "title": "Country",
                "name": "countryName",
                "type": "string",
                "width": "77px"
            }, {
                    "title": "Capital",
                    "name": "capitalName",
                    "type": "string",
                    "width": "100px"
                }, {
                    "title": "Flag",
                    "name": "flagUrl",
                    "type": "string",
                    "width": "54px"
                }, {
                    "title": "Language",
                    "name": "language",
                    "type": "string",
                    "width": "100px"
                }, {
                    "title": "Currency",
                    "name": "currency",
                    "type": "string",
                    "width": "84px"
                }, {
                    "title": "Population",
                    "name": "population",
                    "type": "string",
                    "width": "97px"
                }, {
                    "title": "Size",
                    "name": "size",
                    "type": "string",
                    "width": "50px"
                }, {
                    "title": "Description",
                    "name": "description",
                    "type": "string",
                    "width": "256px"
                }, {
                    "title": "Recomendations",
                    "name": "recomendations",
                    "type": "string",
                    "width": "138px"
                }]
        };
    }

} (angular));