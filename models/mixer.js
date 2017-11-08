module.exports = function(sequelize, DataTypes) {
    var Mixer = sequelize.define("Mixer", {
      mixer_name: DataTypes.STRING,
      mixer_picture: DataTypes.STRING,
      category: DataTypes.STRING
    });

    Mixer.associate = function(models) {
      Mixer.belongsToMany(models.Ratio, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Mixer;
  };