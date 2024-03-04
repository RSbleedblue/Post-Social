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
    },
    posts:[{
        type : mongoose.Types.ObjectId, ref : "Post"
    }],
    tokens: [{
        type: mongoose.Schema.Types.String,
        ref: 'Token'
    }]
});

export default mongoose.model("User", userSchema);
