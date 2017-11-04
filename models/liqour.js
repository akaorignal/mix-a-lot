// Constructor for liquor in sequelize

module.exports = function(sequelize, DataTypes) {
    var Liquor = sequelize.define("Liquor", {
      liquor_name: DataTypes.STRING,
      liquor_picture: DataTypes.STRING,
      spirits: DataTypes.STRING,
      aging: DataTypes.INTEGER,
      label: DataTypes.STRING,
      country: DataTypes.STRING,
      city_of_origin: DataTypes.STRING,
      proof: DataTypes.INTEGER
    });
    return Liquor;
  };