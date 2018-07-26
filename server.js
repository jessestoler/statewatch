const express = require('express');
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
var PORT = process.env.PORT || 5000;
const path = require('path');
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/deliverance";








app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));




app.use(express.static(path.join(__dirname, "client", "build")));

app.use(routes);





mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
    
  });
