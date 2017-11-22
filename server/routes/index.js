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
    Promise.all([
        Hotel.findAll({
         include: [{
             all: true
        }]}),
        Restaurant.findAll({
            include: [{
                all: true
        }]}),
        Activity.findAll({
            include: [{
                all: true
        }]}),
        Place.findAll({
            include: [{
                all: true
        }]})]
    )
    .then((all) => {
        res.json(all);
    });
});

module.exports = router;