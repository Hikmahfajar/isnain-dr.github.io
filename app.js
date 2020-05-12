import "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js";
const mapbox_token = "pk.eyJ1IjoibmFpbmRyIiwiYSI6ImNrOWtydzl4dDAyaHUzbW9jeGQ0Z2M3a2YifQ.lJBv65Gcd0aNiD4kS0kYEQ";



mapboxgl.accessToken = mapbox_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v0',
zoom: 1.5,
center:[0, 0]
});

fetch("/get-covid.json")
.then(response => response.json())
.then(data => { 
    const {places, reports} = data;

reports
.filter(report => !report.hide)
.forEach(report => {
    const {infected, placeId} = report;
    const curruntPlace = place.find(place => place.id == placeId);
    console.log(infected, curruntPlace);
    }); 
});