const express = require('express');
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();
const port = process.env.PORT || 5000;


// This file empties the Books collection and inserts the books below




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use(routes);

/*app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});*/

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/deliverance");




app.listen(port, () => console.log(`Listening on port ${port}`));