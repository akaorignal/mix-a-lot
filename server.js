const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const router = express.Router();

const routes = require("./routes/api-routes");
const apiRoutes = require('./routes/api-routes');
const db = require("./models");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);
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