const express = require('express');
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/deliverance";








app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));






app.use(routes);



mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


app.listen(port, function() {
    console.log("App running on port " + port + "!");
    
  });
