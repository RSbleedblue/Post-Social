import { StatusCodes } from "http-status-codes";
import chatService from "./chatService.js";

const chatServices = new chatService();
class chatController {
  async getChat(req, res) {
    const chatID = req.params.chatID
    const chat = await chatServices.getChat(chatID)
    if(!chat) res.status(StatusCodes.OK).json({chat:""})
    res.status(StatusCodes.OK).json({chat: chat})
  }

  async createChat(req,res){
    const {message, memberID} = req.body;
    const chat = await chatServices.createChat(message,memberID,req.userID)  
    res.status(StatusCodes.OK).json({chatID : chat._id})
  }
}
export default chatController;
