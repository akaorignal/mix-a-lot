var path = require('path');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../view/index.handlebars'));
    });
    // Replace above with
    //res.render(index, 'handlebars')


};