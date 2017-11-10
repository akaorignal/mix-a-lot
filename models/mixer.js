var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Mixer = sequelize.define('mixer', {
    mixer_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mixer_name: {
        type: Sequelize.STRING
    },
    mixer_picture: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    }

}, {
    timestamps: false

});

Mixer.sync();

module.exports = Mixer;