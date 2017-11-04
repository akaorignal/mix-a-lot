//var path = require('path');
var db = require('../models');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    });

    /* Liquors */
    app.get('/liquors/all', function(req, res) {
        db.Liquor.findAll({})
        .then(function(dbLiquor) {
            res.render('liquor-list', {liquor: dbLiquor});
        });
    });

    app.get('/liquors/:id', function(req,res) {
        db.Liquor.findOne({
            where: {
            id: req.body.id
            }
        });
    });


    /* Mixed Drinks */
    app.get('/mixed-drinks/all', function(req, res) {
        db.mixedDrinks.findAll({})
        .then(function(dbMixedDrinks) {
            res.render('mixed-drink-list', {mixedDrinks: dbMixedDrinks });
        });
    });

    app.get('/mixed-drinks/:id', function(req,res) {
        db.mixedDrinks.findOne({
            where: {
            id: req.body.id
            }
        });
    });
    
}; // end of exports