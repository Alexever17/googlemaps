
var lat = 51.508742;
var lng = -0.120850;

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(lat,lng),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
