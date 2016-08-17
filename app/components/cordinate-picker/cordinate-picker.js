(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('cordinatePicker', directive);

    function directive() {
        var directive = {
            templateUrl: './components/cordinate-picker/cordinate-picker.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'conf'];
    function controller($scope, conf) {
        $scope.map = map
        var map;
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      
    }

}(angular));




<!DOCTYPE html>
<html>
<head>
<script
src="http://maps.googleapis.com/maps/api/js">
</script>

<script>
var map;
var myCenter=new google.maps.LatLng(51.508742,-0.120850);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:5,

  };

  map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  google.maps.event.addListener(map, 'click', function(event) {
    getLocation(event.latLng);
  });
}

function getLocation(location) {

  console.log(location);
var lat = document.getElementById("lat");
var lan = document.getElementById("lan");
lat.value = location.lat();
lan.value = location.lan();
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>

<body>
<div id="googleMap" style="width:500px;height:380px;"></div>
langitude<input id="lan" type="text">
latitude<input id="lat" type="text">


</body>
</html>