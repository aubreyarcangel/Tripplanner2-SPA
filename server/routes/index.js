//required for subrouters
const express = require('express');
const router = express.Router();
const db = require('../../models').db
const Hotel = require('../../models').Hotel
const Activity = require('../../models').Activity
const Place = require('../../models').Place
const Restaurant = require('../../models').Restaurant

var allAttractions = {};
//subrouter middleware
router.get('/', (req, res, next) => {
    Promise.all[
        // Hotels.findAll()
        // .then((hotel) => {
        //     allAttractions.hotel = hotel;
        //     return allAttractions.hotel
        // })
        // .then((activity) => {
        //     allAttractions.activity = activity;
        //     return allAttractions.activity
        // })
        // .then((place) => {
        //     allAttractions.place = place;
        //     return allAttractions.place
        // })
        // .then((restaurant) => {
        //     allAttractions.restaurant = restaurant;
        //     return allAttractions.restaurant
        // })
        // .then(function() {
        //     res.json(allAttractions);
        // })
        // .catch(next)

        Hotel.findAll({
         includeALL:true
     })
        ]
})