var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var ratios = require('./models/ratio');


var app = express();


require("./routes/html-routes")(app);
require('./routes/api-routes')(app);
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);


const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + '/public'));

//app.use("/", routes);
// app.use('/api', apiRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// router.get('/', function(req, res) {
//     res.render("index", { title: 'Express' });
// });