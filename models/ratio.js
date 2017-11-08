// Constructor for Mixed Drinks in Sequelize
var mixedDrinks = require('./mixedDrink');
var Liquor = require('./liquor');
var Mixer = require('./mixer');

module.exports = function(sequelize, DataTypes) {
    var Ratio = sequelize.define("ratio", {
        ratio: DataTypes.INTEGER  
        // does this need the foreign keys?
    });
    
    
    Ratio.associate = function(models) {
		Ratio.hasMany(models.Liquor, {
			onDelete: 'cascade'
		});
    };
    
    Ratio.associate = function(models) {
		Ratio.hasMany(models.mixedDrinks, {
			onDelete: 'cascade'
		});
    };

    Ratio.associate = function(models) {
		Ratio.hasMany(models.Mixer, {
			onDelete: 'cascade'
		});
    };

    return Ratio;
};