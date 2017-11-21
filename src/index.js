const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = "pk.eyJ1Ijoia21hY3BoZXIxOSIsImEiOiJjamE5cGVuaWIwa2VsMzNsaWxvdDJvM3ZoIn0.DHYid3XVXt70jWyGreRY3w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', [-74.009, 40.705]);

marker.addTo(map);
