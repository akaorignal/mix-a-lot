var Sequelize = require("sequelize");
// var config = require('./config/config.json');

// var sequelize = new Sequelize("all_alcohol_db", "root", ".1.got.d@.p0w3r.", {
//     host: "127.0.0.1",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 1000

//     }
// });

if (process.env.JAWSDB_URL) {

  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} 
else {

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