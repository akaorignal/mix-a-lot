let db = require('../models');

module.exports = function(app) {
    app.get('mix-a-lot/liquors', function(req, res) {
        db.Liquor.findAll({})
        .then(function(dbLiquor) {
            res.json(dbLiquor);
        });
    });
}