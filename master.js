
var lat = Math.random()*(90 - 1) + 1;
var lng = Math.random()*(90 - 1) + 1;

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(lat,lng),
    zoom:7,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
};
//https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
