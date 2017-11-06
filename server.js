var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// Changed where this was targeting from "../mix-a-lot/routes/api-routes.js" -- Noah
var routes = require("./routes/api-routes");

app.use("/", routes);

var db = require("./models");

const apiRoutes = require('./routes/api-routes');
app.use('/api', apiRoutes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });

router.get('/', function(req, res) {
    res.json({ title: 'Express' });
});

module.exports = router;