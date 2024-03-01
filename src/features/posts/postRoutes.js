import { Router } from "express";
import postController from "./postController.js";
const postRouter = Router();
const post = new postController;

postRouter.get("/",(req,res) => post.getAll(req,res));
postRouter.post("/add",(req,res) => post.create(req,res));
export default postRouter;
