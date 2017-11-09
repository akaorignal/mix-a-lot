
// Constructor for Mixed Drinks in Sequelize

var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var mixedDrinks = sequelize.define('mixedDrinks', {
    mixed_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mixed_name: {
        type: Sequelize.STRING
    },
    mixed_picture: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    city_of_origin: {
        type: Sequelize.STRING
    },
    proof: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false

});

mixedDrinks.sync();

module.exports = mixedDrinks;
