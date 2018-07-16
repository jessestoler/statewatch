const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateSchema = new Schema({
  name: { type: String, required: true },
  houseDems: { type: Number, required: true },
  houseGOP: { type: Number, required: true },
  houseOther: { type: Number, required: true },
  senateDems: { type: Number, required: true },
  senateGOP: { type: Number, required: true },
  senateOther: { type: Number, required: true },
  speaker: { type: String, required: true },
  houseMajority: { type: String, required: true },
  houseMinority: { type: String, required: true },
  senateMajority: { type: String, required: true },
  senateMinority: { type: String, required: true },
  flag: { type: String, required: true },
  mainImage: { type: String, required: true }

});

const State = mongoose.model("State", stateSchema);

module.exports = State;