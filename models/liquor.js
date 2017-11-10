var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Liquor = sequelize.define('liquor', {
    liquor_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    liquor_name: {
        type: Sequelize.STRING
    },
    liquor_picture: {
        type: Sequelize.STRING
    },
    spirits: {
        type: Sequelize.STRING
    },
    aging: {
        type: Sequelize.INTEGER
    },
    label: {
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

// Liquor.associate = function(models) {
//     Liquor.belongsToMany(models.Ratio, {
//       through: 'ratios',
//       foreignKey: {
//         allowNull: false
//       }
//     });
// };

Liquor.sync({force: false});

module.exports = Liquor;