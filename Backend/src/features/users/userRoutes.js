import { Router } from "express";
import userController from "./userController.js";
const userRouter = Router();

const user = new userController();
userRouter.post("/register", (req, res)=>user.signUser(req,res));
userRouter.post("/login", (req,res) => user.login(req,res));
export default userRouter;