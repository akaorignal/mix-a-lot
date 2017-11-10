// Constructor for Mixed Drinks in Sequelize
var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

    var Ratio = sequelize.define("Ratio", {
        ratio: Sequelize.INTEGER  
        // does this need the foreign keys?
    });
    
    
    // Ratio.associate = function(models) {
	// 	Ratio.hasMany(models.Liquor, {
	// 		onDelete: 'cascade'
	// 	});
    // };
    
    // Ratio.associate = function(models) {
	// 	Ratio.hasMany(models.mixedDrinks, {
	// 		onDelete: 'cascade'
	// 	});
    // };

    // Ratio.associate = function(models) {
	// 	Ratio.hasMany(models.Mixer, {
	// 		onDelete: 'cascade'
	// 	});
    // };
    Ratio.sync({force: false});
    module.exports = Ratio;