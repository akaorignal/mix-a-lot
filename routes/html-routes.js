//var path = require('path');
var db = require('../models');

module.exports = function(app) {

    app.get('/', function(req, res) {
        //res.sendFile(path.join(__dirname, '../view/index.handlebars'));
        res.render("index", { home: homeData });
    });
    // Replace above with
    //res.render(index, 'handlebars')

    app.get('/liquors', function(req, res) {
        db.Liquor.findAll({})
        .then(function(dbLiquor) {
            res.render('liquor-list', {liquor: dbLiquor});
        });
    });

};