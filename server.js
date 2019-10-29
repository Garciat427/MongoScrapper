var express = require("express"); 
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3001;

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

var routes = require("./controllers/mongoController.js");
app.use(routes);

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
