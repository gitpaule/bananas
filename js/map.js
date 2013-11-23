var map = L.map('map').setView([51.505, -0.09], 13);
var tilesUrl = 'http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg';
L.tileLayer(tilesUrl,{
	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png"> with data from <a href="http://www.openstreetmap.org/copyright">OpenStreetMaps</a>.',
	subdomains: '1234'
}).addTo(map);
var onLocationFound = function(e) {
	"use strict";
	var radius = e.accuracy / 2;

	L.circle(e.latlng, radius).addTo(map);


				//add some boxes...
	var boxLatLong1 = L.latLng(e.latlng.lat + 0.0006, e.latlng.lng);
	var boxLatLong2 = L.latLng(e.latlng.lat + 0.0003, e.latlng.lng - 0.0006);
	var boxLatLong3 = L.latLng(e.latlng.lat, e.latlng.lng - 0.0004);

	L.marker(boxLatLong1,{
		icon: L.icon({iconUrl:"images/box.jpg"})
	}).addTo(map);
					
	
	L.marker(boxLatLong2,{
		icon: L.icon({iconUrl:"images/box.jpg"})
	}).addTo(map);
	
	L.marker(boxLatLong3,{
		icon: L.icon({iconUrl:"images/box.jpg"})
	}).addTo(map);
};

map.on('locationfound', onLocationFound);
	
map.locate({setView: true, maxZoom: 18});

var refreshMapNonStop = function() {
	map.locate({setView: true, maxZoom: 18});
	window.setTimeout(refreshMapNonStop, 5000);
};
refreshMapNonStop();

