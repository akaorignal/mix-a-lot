var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {

    var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {


    var sequelize = new Sequelize("all_alcohol_db", "root", null, {
        host: "127.0.0.1",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 1000

        }
    });
}

module.exports = sequelize;
