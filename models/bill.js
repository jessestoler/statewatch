const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  name: { type: String, required: true },
  sponsor: { type: String, required: true },
  image: { type: String, required: true },
  summary: { type: String, required: true },
  text: { type: String, required: true },
  state: { type: String, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  popularity: { type: Number, required: true },
  votes: { type: Number, required: true }

});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;