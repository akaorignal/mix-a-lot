// Constructor for Mixed Drinks in Sequelize
var mixedDrinks = require('./mixedDrink');
var Liquor = require('./liquor');

module.exports = function(sequelize, DataTypes) {
    var Ratio = sequelize.define("ratio", {
        ratio: DataTypes.INTEGER  
    });
    
    
    Ratio.associate = function(models) {
		// Associating Author with Posts
		// When an Author is deleted, also delete any associated Posts
		Ratio.hasMany(models.Liquor, {
			onDelete: 'cascade'
		});
    };
    
    Ratio.associate = function(models) {
		// Associating Author with Posts
		// When an Author is deleted, also delete any associated Posts
		Ratio.hasMany(models.mixedDrinks, {
			onDelete: 'cascade'
		});
    };

    return Ratio;
};