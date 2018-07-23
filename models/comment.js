const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  attachment: { type: String, required: true },
  type: { type: String, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  popularity: { type: Number, required: true },
  amount: { type: Number, required: true },
  vote: { type: String, required: true }

});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;