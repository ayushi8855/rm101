const mongoose = require("mongoose");

// comment Schema

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// comment model

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;