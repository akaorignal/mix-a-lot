var db = require('../models');

module.exports = function(app) {
    /* Liquors */
    app.get('/api/liquors', function(req, res) {
        db.Liquor.findAll({})
        .then(function(dbLiquor) {
            res.json(dbLiquor);
        });
    });

    // // Search for one liquor
    // app.get("/api/liquors/:id", function(req, res) {
    //     db.Liquor.findOne({
    //         where: {
    //         id: req.params.id
    //         }
    //     }).then(function(dbLiquor) {
    //         res.json(dbLiquor);
    //     });
    // });

    // app.post("/api/liquors", function(req, res) {
    // // console.log(req.body);
    //     db.Liquor.create({
    //         liquor_name: DataTypes.STRING,
    //         liquor_picture: DataTypes.STRING,
    //         spirits: DataTypes.STRING,
    //         aging: DataTypes.INTEGER,
    //         label: DataTypes.STRING,
    //         country: DataTypes.STRING,
    //         city_of_origin: DataTypes.STRING,
    //         proof: DataTypes.INTEGER
    //     }).then(function(dbLiquor) {
    //         res.json(dbLiquor);
    //     });
    // });

    // app.delete("/api/liquors/:id", function(req, res) {
    //     db.Liquor.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbLiquor) {
    //         res.json(dbLiquor);
    //     });
    // });


    // /* Mixed Drinks */
    // app.get('/api/mixed-drinks', function(req, res) {
    //     db.mixedDrinks.findAll({})
    //     .then(function(dbMixedDrinks) {
    //         res.json(dbMixedDrinks);
    //     });
    // });

    // // Search for one mixed
    // app.get("/api/mixed-drinks/:id", function(req, res) {
    //     db.mixedDrinks.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbMixedDrinks) {
    //         res.json(dbMixedDrinks);
    //     });
    // });

    // app.post("/api/mixed-drinks", function(req, res) {
    //     // console.log(req.body);
    //     db.mixedDrinks.create({
    //         mixed_name: DataTypes.STRING,
    //         mixed_picture: DataTypes.STRING,
    //         country: DataTypes.STRING,
    //         city_of_origin: DataTypes.STRING,
    //         proof: DataTypes.INTEGER
    //     }).then(function(dbMixedDrinks) {
    //         res.json(dbMixedDrinks);
    //     });
    // });
      
    // app.delete("/api/mixed-drinks/:id", function(req, res) {
    //     db.Liquor.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbLiquor) {
    //         res.json(dbLiquor);
    //     });
    // });

}; // end of module