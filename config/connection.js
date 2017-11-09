var Sequelize = require("sequelize");

var sequelize = new Sequelize("all_alcohol_db", "root", "Ak48126969!", {
    host: "127.0.0.1",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 1000

    }
});

module.exports = sequelize;