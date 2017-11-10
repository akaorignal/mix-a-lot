//var db = require('../models');
var Liquor = require("../models/liquor.js");
var mixedDrinks = require("../models/mixedDrink.js");
var Mixer = require("../models/Mixers.js");

module.exports = function(app) {
    /* Liquors */
    app.get('/api/liquors', function(req, res) {
        Liquor.findAll({})
            .then(function(dbLiquor) {
                res.json(dbLiquor);
            });
    });

    // Search for one liquor
    app.get("/api/liquors/:liquor_id", function(req, res) {
        Liquor.findOne({
            where: {
                liquor_id: req.params.liquor_id
            }
        }).then(function(dbLiquor) {
            res.json(dbLiquor);
        });
    });

    app.post("/api/add-liquor", function(req, res) {
        // console.log(req.body);
        Liquor.create({
            liquor_name: DataTypes.STRING,
            liquor_picture: DataTypes.STRING,
            spirits: DataTypes.STRING,
            aging: DataTypes.INTEGER,
            label: DataTypes.STRING,
            country: DataTypes.STRING,
            city_of_origin: DataTypes.STRING,
            proof: DataTypes.INTEGER
        }).then(function(dbLiquor) {
            res.json(dbLiquor);
        });
    });

    app.delete("/api/liquors/:liquor_id", function(req, res) {
        Liquor.destroy({
            where: {
                liquor_id: req.params.liquor_id
            }
        }).then(function(dbLiquor) {
            res.json(dbLiquor);
        });
    });


    /* Mixed Drinks */
    app.get('/api/mixed-drinks', function(req, res) {
        mixedDrinks.findAll({})
            .then(function(dbMixedDrinks) {
                res.json(dbMixedDrinks);
            });
    });

    // Search for one mixed
    app.get("/api/mixed-drinks/:mixed_id", function(req, res) {
        mixedDrinks.findOne({
            where: {
                mixed_id: req.params.mixed_id
            }
        }).then(function(dbMixedDrinks) {
            res.json(dbMixedDrinks);
        });
    });

    app.post("/api/mixed-drinks", function(req, res) {
        // console.log(req.body);
        mixedDrinks.create({
            mixed_name: DataTypes.STRING,
            mixed_picture: DataTypes.STRING,
            country: DataTypes.STRING,
            city_of_origin: DataTypes.STRING,
            proof: DataTypes.INTEGER
        }).then(function(dbMixedDrinks) {
            res.json(dbMixedDrinks);
        });
    });

    app.delete("/api/mixed-drinks/:mixed_id", function(req, res) {
        Liquor.destroy({
            where: {
                mixed_id: req.params.mixed_id
            }
        }).then(function(dbLiquor) {
            res.json(dbLiquor);
        });
    });

}; // end of module