// userModel.js
import mongoose, { Mongoose } from "mongoose";

const tokenSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tokens: [{
        type: mongoose.Schema.Types.String,
        ref: 'Token'
    }]
});


export default mongoose.model("Tokens", tokenSchema);
