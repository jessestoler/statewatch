const express = require('express');
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');








app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }




app.use(routes);



mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/deliverance");



app.listen(port, () => console.log(`Listening on port ${port}`));