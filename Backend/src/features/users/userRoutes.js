import { Router } from "express";
import userController from "./userController.js";
import jwtAuth from "../../utils/jwt.js";
const userRouter = Router();

const user = new userController();
userRouter.post("/register", (req, res) => user.signUser(req, res));
userRouter.post("/login", (req, res) => user.login(req, res));
userRouter.get("/:friendId/updatefriend", jwtAuth, (req, res) =>
  user.updateFriend(req, res)
);
userRouter.get("/getFriends", jwtAuth, (req, res) => user.getFriend(req, res));
export default userRouter;
