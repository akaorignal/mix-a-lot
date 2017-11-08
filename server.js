const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const router = express.Router();

require("./routes/html-routes")(app);
require('./routes/api-routes')(app);
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
const db = require("./models");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//app.use("/", routes);
// app.use('/api', apiRoutes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});

// router.get('/', function(req, res) {
//     res.render("index", { title: 'Express' });
// });

module.exports = router;