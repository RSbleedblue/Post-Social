import { StatusCodes } from "http-status-codes";
import postService from "./postService.js";
import userService from "../users/userService.js";
import getDataUri from "../../utils/DataURI.js";
import { v2 as cloudinary } from "cloudinary";
import { upload } from "../../utils/multerConfig.js";

const postServiceInstance = new postService();
const userServiceInstance = new userService();

export class postController {
  async getAll(req, res) {
    try {
      let result = await postServiceInstance.getPosts();
      let promises = result.map(async (post) => {
        const user = post.user;
        const userInfo = await userServiceInstance.findUserforPost(user);
        const didCurUserLiked = await postServiceInstance.didUserLiked(
          post.id,
          req.userID
        );
        const isThisCurUserPost = user == req.userID;
        const isThisMyFriend = await userServiceInstance.isMyFriend(
          user,
          req.userID
        );
        return Object.assign(
          {
            didUserLiked: didCurUserLiked,
            isCurUserPost: isThisCurUserPost,
            isCurUserFriend: isThisMyFriend,
          },
          userInfo._doc,
          post._doc
        );
      });

      let finalResult = await Promise.all(promises);
      return res.status(StatusCodes.ACCEPTED).send(finalResult);
    } catch (error) {
      console.error("Error occurred:", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ error: "Internal Server Error" });
    }
  }
  async create(req, res) {
    upload.single("imgPath")(req, res, async (err) => {
      try {
        if (err) {
          return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ message: "Error while uploading File" });
        }

        const { title, caption } = req.body;
        const user = req.userID;

        if (!title || !caption) {
          return res
            .status(StatusCodes.BAD_REQUEST)
            .send({ message: "Missing fields" });
        }

        // Now, you can access req.file as the file has been uploaded successfully
        const imgPath = req.file;
        const imgURI = getDataUri(imgPath);

        const myCloud = await cloudinary.uploader.upload(imgURI.content);
        const imgUrl = myCloud.url;

        const result = await postServiceInstance.addPost(
          caption,
          title,
          imgUrl,
          user
        );
        const userInfo = await userServiceInstance.findUser(user);
        const finalResult = { ...result, ...userInfo };
        console.log(finalResult);

        if (!result) {
          return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ message: "Failed to create a Post" });
        }
        return res.status(StatusCodes.ACCEPTED).send({ result, userInfo });
      } catch (error) {

      }
    });
  }
  async updateLike(req, res) {
    const postId = req.params.postId;
    postServiceInstance.updateLikeofPost(postId, req.userID);
    userServiceInstance.updateLikeofUser(postId, req.userID);
    res.status(StatusCodes.OK).send({ message: "Like added" });
  }
}
export default postController;
