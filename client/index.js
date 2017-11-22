const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");
// const api = require('./api');

mapboxgl.accessToken = "pk.eyJ1IjoiYWFyY2FuZ2VsIiwiYSI6ImNqYTl1ZXZzZDBsYWYzMmxpazF3bDVuNnkifQ.WE42clV9FSudlJGMl81UBQ";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);

fetch('/api/')
.then(result => result.json())
.then(data => {
// console.log(data)
// console.log(data[0])
const hotels = data[0]
const restaurants = data[1]
const activities = data[2]
const hotelsOption = document.getElementById('hotels-choices')
  hotels.forEach(function(hotel) {
    let createOption = new Option(hotel.name)
  hotelsOption.append(createOption)
})
  const restaurantsOption = document.getElementById('restaurants-choices')
  restaurants.forEach(function(hotel) {
      let createOption = new Option(hotel.name)
    restaurantsOption.append(createOption)
  })
  const activitiesOption = document.getElementById('activities-choices')
    activities.forEach(function(hotel) {
      let createOption = new Option(hotel.name)
      activitiesOption.append(createOption)
  })
})
.catch(console.error)

let hotel-choice = document.getElementById('hotel-choices')
add.onclick = function(event) { }


let add = document.getElementById('hotels-add');
add.onclick = function(event) { alert("moot!"); };
const select = document.getElementById(`hotels-choices`);
// use `.value` to get the currently selected value
const selectedId = select.value;
console.log(selectedId)

// const act = document.getElementById('activities-choices');
// activities.forEach(function(activity) {
//   let option = document.createElement('option')
//   option.append('activities.name')
//   // let actOption = new Option(activity.name)
//   console.log(actOption)
//   act.append(actOption);
// }) 
