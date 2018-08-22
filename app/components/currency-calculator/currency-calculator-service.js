(function (angular) {
    'use strict';

    var res ;
    var from = ["CAD","EUR","AFN","ALL","AMD","ARS","AUD","AZN" ,"BAM" ,"BDT" ,"BGN" ,"BHD","BIF","BND" ,"BOB","BRL","BWP","BYR" ,"BZD","CDF","CHF" ,"CLP" ,"CNY" ,"COP" , "CRC" ,"CVE" ,"CZK" , "DJF" ,"DKK" ,"DOP","DZD" ,"EEK" ,"EGP" ,"ERN" ,"ETB" ,"GBP" ,"GEL","GHS","GNF","GTQ" ,"HKD","HNL","HRK","HUF", "IDR","ILS","INR","IQD","IRR","ISK","JMD" ,"JOD" ,"JPY", "KES","KHR","KMF","KRW", "KWD", "KZT",  "LBP", "LKR" ,"LTL","LVL" ,"LYD" ,   "MAD" ,"MDL" , "MGA" ,"MKD" ,"MMK" ,"MOP" ,"MUR" ,"MXN" ,"MYR" ,"MZN","NAD","NGN" ,  "NIO" ,"NOK","NPR" ,"NZD" ,"OMR" ,"PAB" ,"PEN" ,"PHP"  ,   "PKR" ,"PLN" ,"PYG" ,"QAR" , "RON" , "RSD" ,"RUB" ,"RWF" ,   "SAR" , "SDG" ,"SEK" ,   "SGD" ,"SOS" ,"SYP" ,"THB" ,"TOP" ,   "TRY" ,"TTD" ,"TWD" ,"TZS" ,"UAH" ,"UGX" ,"UYU"  ,  "UZS" ,"VEF" ,"VND"  ,  "XAF" ,"XOF" ,"YER"  ,"ZAR" ,"ZMK" ,];
    var to =  ["CAD","EUR","AFN","ALL","AMD","ARS","AUD","AZN" ,"BAM" ,"BDT" ,"BGN" ,"BHD","BIF","BND" ,"BOB","BRL","BWP","BYR" ,"BZD","CDF","CHF" ,"CLP" ,"CNY" ,"COP" , "CRC" ,"CVE" ,"CZK" , "DJF" ,"DKK" ,"DOP","DZD" ,"EEK" ,"EGP" ,"ERN" ,"ETB" ,"GBP" ,"GEL","GHS","GNF","GTQ" ,"HKD","HNL","HRK","HUF", "IDR","ILS","INR","IQD","IRR","ISK","JMD" ,"JOD" ,"JPY", "KES","KHR","KMF","KRW", "KWD", "KZT",  "LBP", "LKR" ,"LTL","LVL" ,"LYD" ,   "MAD" ,"MDL" , "MGA" ,"MKD" ,"MMK" ,"MOP" ,"MUR" ,"MXN" ,"MYR" ,"MZN","NAD","NGN" ,  "NIO" ,"NOK","NPR" ,"NZD" ,"OMR" ,"PAB" ,"PEN" ,"PHP"  ,   "PKR" ,"PLN" ,"PYG" ,"QAR" , "RON" , "RSD" ,"RUB" ,"RWF" ,   "SAR" , "SDG" ,"SEK" ,   "SGD" ,"SOS" ,"SYP" ,"THB" ,"TOP" ,   "TRY" ,"TTD" ,"TWD" ,"TZS" ,"UAH" ,"UGX" ,"UYU"  ,  "UZS" ,"VEF" ,"VND"  ,  "XAF" ,"XOF" ,"YER"  ,"ZAR" ,"ZMK" ,];

    angular
        .module('app')
        .factory('currencyConvertor', service);

    service.$inject = ['$http'];

    function service($http) {
        return {
            res: res,
            from:from,
            to:to,
            convert:convert,
        };

        function convert(quantity, from, to) {
            return $http({
                headers: {
                'X-Mashape-Key': '9FwiRqSN7EmshEGD9i5Kekrzu9uYp10eKmPjsnLQuSwwSC4Vgi'
                },
                methood: 'GET',
                url: 'https://currency-exchange.p.mashape.com/exchange?from='+from+'&q='+quantity+'.0&to='+to,
            }).then(function successCallback(response) {
                return res ={'result': response.data,
                                'to':to,
                            }
            }, function errorCallback(response) {
                console.log('error' + response);
            });
        }
    }

   
        
}(angular));