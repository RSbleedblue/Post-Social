import userModel from "../users/userModel.js";
import postModel from "./postModel.js";

export default class postService {
  constructor() {
    this.postModel = postModel;
  }
  async getPosts() {
    const result = postModel.find().select("-likes");
    return result;
  }
  async addPost(caption, title, imgUrl, user) {
    let newPost = await this.postModel.create({ caption, title, imgUrl, user });
    await userModel.findByIdAndUpdate(user, { $push: { posts: newPost._id } });
    return newPost;
  }
  async updateLikeofPost(postId, userId) {
    try {
      const post = await this.postModel.findById(postId);
      if (!post) {
        console.log("Post not found");
        return;
      }

      const isLiked = post.likes.includes(userId);
      if (isLiked) {
        await this.postModel.findByIdAndUpdate(postId, {
          $pull: { likes: userId },
          $inc: { totallikes: -1 },
        });
      } else {
        await this.postModel.findByIdAndUpdate(postId, {
          $push: { likes: userId },
          $inc: { totallikes: 1 },
        });
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  }

  async didUserLiked(postId, userId) {
    let post = await this.postModel.findById(postId);
    return post.likes.includes(userId);
  }
}
