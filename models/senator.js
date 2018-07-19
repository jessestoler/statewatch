const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const senatorSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  firstYear: { type: Number, required: true },
  state: { type: String, required: true },
  party: { type: String, required: true },
  district: { type: String, required: true },
  bio: { type: String, required: true },
  committees: { type: String, required: true }
  
});

const Senator = mongoose.model("Senator", senatorSchema);

module.exports = Senator;
