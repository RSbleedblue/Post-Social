import mongoose from "mongoose";
import userModel from "../users/userModel.js";

const postModel = new mongoose.Schema({
  caption: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  userName: {
    type: String,
  },
  likes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  totallikes: { type: Number, default: 0 },
  comments: [{ type: mongoose.Types.ObjectId, ref: "comment" }],
});

postModel.pre("save", async function (next) {
  try {
    const username = await userModel.findById(this.user);
    if (username) {
      this.userName = username.name;
    }
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.model("Post", postModel);
