const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  firstYear: { type: Number, required: true },
  state: { type: String, required: true },
  party: { type: String, required: true },
  chamber: { type: String, required: true },
  district: { type: String, required: true },
  bio: { type: String, required: true },
  economy: { type: String, required: true },
  environment: { type: String, required: true },
  social: { type: String, required: true },
  committees: { type: String, required: true }
  
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
