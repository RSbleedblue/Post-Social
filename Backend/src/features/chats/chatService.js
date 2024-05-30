import userModel from "../users/userModel.js";
import chatsModel from "./chatsModel.js";

class chatService {
  constructor() {
    this.chatModel = chatsModel;
  }

  async getChat(chatId) {
    const chat = await this.chatModel.findById(chatId);
    return chat;
  }

  async createChat(message,memberID,userID){
    const chatMembers = [memberID,userID];
    const chatMessage = [{
      sender: userID,
      content: message
    }]
    const chat = await this.chatModel.create({chatMembers:chatMembers, chats:chatMessage})
    await userModel.findOneAndUpdate({_id: userID},{$push:{chats : chat._id}})
    await userModel.findOneAndUpdate({_id: memberID},{$push:{chats : chat._id}})

    return chat;
  }
}
export default chatService;
