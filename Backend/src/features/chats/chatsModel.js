// chatsModel.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});


const chatsSchema = new mongoose.Schema({
  chatMembers: [{_id:false ,type: mongoose.Types.ObjectId, ref: "User" }],
  chats: [{ _id: false, type: messageSchema, select: false}],
});

export default mongoose.model("Chats", chatsSchema);
