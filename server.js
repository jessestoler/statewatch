const express = require('express');
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
const port = process.env.PORT || git3000;
const path = require('path');








app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






app.use(routes);



mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/deliverance");



app.listen(port, () => console.log(`Listening on port ${port}`));
