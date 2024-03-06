// userModel.js
import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\../, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  ],
  profileUrl: {
    type: String,
    default:
      "http://res.cloudinary.com/dxquzx2ep/image/upload/v1709643238/dxa9yxcmwgog5dbe0raq.jpg",
  },
  coverUrl: {
    type: String,
    default:
      "http://res.cloudinary.com/dxquzx2ep/image/upload/v1709656218/amaq66l9wnahmrlw6q66.jpg",
  },
});

export default mongoose.model("User", userSchema);
