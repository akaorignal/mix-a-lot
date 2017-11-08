// Constructor for Mixed Drinks in Sequelize

module.exports = function(sequelize, DataTypes) {
    var mixedDrinks = sequelize.define("mixedDrinks", {
        mixed_name: DataTypes.STRING,
        mixed_picture: DataTypes.STRING,
        country: DataTypes.STRING,
        city_of_origin: DataTypes.STRING,
        proof: DataTypes.INTEGER
    });

    mixedDrinks.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        mixedDrinks.belongsToMany(models.ratio, {
            foreignKey: {
				allowNull: false
			}
        });
      };

    return mixedDrinks;
};