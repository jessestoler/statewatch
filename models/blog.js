const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  text: { type: String, required: true },
  state: { type: String, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true }

});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;