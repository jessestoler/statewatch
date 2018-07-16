const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const senateSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  firstYear: { type: Number, required: true },
  state: { type: String, required: true },
  party: { type: String, required: true }
});

const Senator = mongoose.model("Senator", senateSchema);

module.exports = Senator;
