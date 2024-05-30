import { Router } from "express";
import chatController from "./chatController.js";
const chatRouter = Router();

const chat = new chatController();
chatRouter.get("/:chatID", (req, res) => chat.getChat(req, res));
chatRouter.post("/createChat", (req, res) => chat.createChat(req, res));
export default chatRouter;
