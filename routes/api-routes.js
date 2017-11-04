let db = require('../models');

module.exports = function(app) {
    /* Liquors */
    app.get('mix-a-lot/api/liquors', function(req, res) {
        db.Liquor.findAll({})
        .then(function(dbLiquor) {
            res.json(dbLiquor);
        });
    });

    /* Mixed Drinks */
    app.get('mix-a-lot/api/mixed-drinks', function(req, res) {
        db.mixedDrinks.findAll({})
        .then(function(dbMixedDrinks) {
            res.json(dbMixedDrinks);
        });
    });
};