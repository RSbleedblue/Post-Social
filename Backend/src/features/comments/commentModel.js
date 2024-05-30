import mongoose from "mongoose";

const commentModel = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  commenter: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  parent: {
    type: mongoose.Types.ObjectId,
    ref: "comment",
    default: null, // Default value for root comments
  },
  replies: [
    {
      type: mongoose.Types.ObjectId,
      ref: "comment",
      select: false,
    },
  ],
});

export default mongoose.model("comment", commentModel);
