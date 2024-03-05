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
        match: [/.+\@.+\../, "Please Enter a valid Email"]
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    posts:[{
        type : mongoose.Types.ObjectId, ref : "Post"
    }],
    profileUrl : {
        type: String,
        default: "",
    },
    coverUrl : {
        type: String,
        default: "",
    }
});

export default mongoose.model("User", userSchema);
