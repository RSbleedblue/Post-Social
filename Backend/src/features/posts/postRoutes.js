import { Router } from "express";
import postController from "./postController.js";
import commentController from "../comments/commentController.js";
const postRouter = Router();
const post = new postController();
const comment = new commentController();

postRouter.get("/", (req, res) => post.getAll(req, res));
postRouter.post("/add", (req, res) => post.create(req, res));
postRouter.get("/:postId/updatelike", (req, res) => post.updateLike(req, res));
postRouter.post("/:postId/addcomment", (req, res) =>
  comment.addComment(req, res)
);
postRouter.get("/:postId/getcomment", (req, res) =>
  comment.getComments(req, res)
);
postRouter.post("/:parentCmtId/addreply", (req, res) =>
  comment.addReply(req, res)
);

postRouter.get("/:parentCmtId/getreply", (req, res) => {
  comment.getReply(req, res);
});

export default postRouter;
