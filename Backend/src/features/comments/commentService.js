import postModel from "../posts/postModel.js";
import commentModel from "./commentModel.js";

export default class commentService {
  constructor() {
    this.commentModel = commentModel;
  }

  async addComment(postId, userId, req) {
    const comment = await this.commentModel.create({
      text: req.text,
      commenter: userId,
    });
    await postModel.findByIdAndUpdate(postId, {
      $push: { comments: comment },
    });
  }

  async getComment(postId) {
    const post = await postModel.findById(postId);
    if (!post) {
      throw new Error("For Comments, Post not found");
    }
    await post.populate({
      path: "comments",
      populate: {
        path: "commenter",
        select: "-likes -email -posts -likestotal",
      },
    });
    return post.comments;
  }

  async addReply(parentCommentId, userId, req) {
    const replyComment = await commentModel.create({
      text: req.text,
      commenter: userId,
      parent: parentCommentId,
    });

    const parentComment = await commentModel
      .findById(parentCommentId)
      .select("+replies");
    if (!parentComment) {
      throw new Error("Parent comment not found");
    }

    // Push the ObjectId of the reply comment into the parent's replies array
    parentComment.replies.push(replyComment._id);
    await parentComment.save();

    return replyComment;
  }

  async getReply(commentId) {
    const comments = await commentModel.findById(commentId).select("+replies");
    await comments.populate({
      path: "replies",
      populate: {
        path: "commenter",
        select: "-likes -email -posts -likestotal",
      },
    });
    console.log(comments);
    return comments.replies;
  }
}
