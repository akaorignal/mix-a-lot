// Constructor for Mixed Drinks in Sequelize

module.exports = function(sequelize, DataTypes) {
    var mixedDrinks = sequelize.define("Mixed Drinks", {
        mixed_name: DataTypes.STRING,
        mixed_picture: DataTypes.STRING,
        country: DataTypes.STRING,
        city_of_origin: DataTypes.STRING,
        proof: DataTypes.INTEGER
    });
    return mixedDrinks;
};