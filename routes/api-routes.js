let db = require('../models');

module.exports = function(app) {
    /* Liquors */
    app.get('mix-a-lot/api/liquors', function(req, res) {
        db.Liquor.findAll({})
        .then(function(dbLiquor) {
            res.json(dbLiquor);
        });
    });

  app.post("mix-a-lot/api/liquors", function(req, res) {
    // console.log(req.body);
    db.Liquor.create({
        liquor_name: DataTypes.STRING,
        liquor_picture: DataTypes.STRING,
        spirits: DataTypes.STRING,
        aging: DataTypes.INTEGER,
        label: DataTypes.STRING,
        country: DataTypes.STRING,
        city_of_origin: DataTypes.STRING,
        proof: DataTypes.INTEGER
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });




    /* Mixed Drinks */
    app.get('mix-a-lot/api/mixed-drinks', function(req, res) {
        db.mixedDrinks.findAll({})
        .then(function(dbMixedDrinks) {
            res.json(dbMixedDrinks);
        });
    });

    app.post("mix-a-lot/api/mixed-drinks", function(req, res) {
        // console.log(req.body);
        db.mixedDrinks.create({
            mixed_name: DataTypes.STRING,
            mixed_picture: DataTypes.STRING,
            country: DataTypes.STRING,
            city_of_origin: DataTypes.STRING,
            proof: DataTypes.INTEGER
        }).then(function(dbTodo) {
          res.json(dbTodo);
        });
      });    

}; // end of module