import { StatusCodes } from "http-status-codes";
import userService from "../users/userService.js";
import commentService from "./commentService.js";
import postService from "../posts/postService.js";

const postServiceInstance = new postService();
const userServiceInstance = new userService();
const commentServiceInstance = new commentService();

export class commentController {
  async addComment(req, res) {
    const { postId } = req.params;
    // commentId is null because we are only supporting parent comment rn
    await commentServiceInstance.addComment(postId, req.userID, req.body);

    res.status(StatusCodes.CREATED).send({ message: "Comment Added" });
  }

  async getComments(req, res) {
    const { postId } = req.params;
    const comments = await commentServiceInstance.getComment(postId);
    res.status(StatusCodes.OK).send({ comments: comments });
  }

  async addReply(req, res) {
    const { parentCmtId } = req.params;
    const reply = await commentServiceInstance.addReply(
      parentCmtId,
      req.userID,
      req.body
    );
    res.status(StatusCodes.CREATED).send({ comment: reply });
  }

  async getReply(req, res) {
    const { parentCmtId } = req.params;
    const replies = await commentServiceInstance.getReply(parentCmtId);
    res.status(StatusCodes.OK).send({ comment: replies });
  }
}
export default commentController;
