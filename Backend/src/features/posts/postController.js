import { StatusCodes } from "http-status-codes";
import postService from "./postService.js";
import userService from "../users/userService.js"
import getDataUri from "../../utils/DataURI.js";
import {v2 as  cloudinary}  from 'cloudinary';

const postServiceInstance = new postService();
const userServiceInstance = new userService();

export class postController{
    async getAll(req, res) {
        try {
            let result = await postServiceInstance.getPosts();
            let promises = result.map(async post => {
                const user = post.user;
                const userInfo = await userServiceInstance.findUserforPost(user);
                return Object.assign({}, post._doc, userInfo._doc);
            });
    
            let finalResult = await Promise.all(promises);
    
            console.log(finalResult);
            return res.status(StatusCodes.ACCEPTED).send(finalResult);
        } catch (error) {
            console.error("Error occurred:", error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Internal Server Error" });
        }
    }    
    async create(req,res){
        const {caption, title} = req.body;
        const user = req.userID;
        if(!title || !caption) 
            return res.status(StatusCodes.BAD_REQUEST).send({message: 'Missing fields'});
        const imgPath = req.file;
        const imgURI = getDataUri(imgPath);

        const myCloud = await cloudinary.uploader.upload(imgURI.content);

        const imgUrl = myCloud.url;

        const result = await postServiceInstance.addPost(caption,title,imgUrl,user);
        const userInfo = await userServiceInstance.findUser(user);
        const finalResult = {...result, ...userInfo}
        console.log(finalResult);
        if(!result){
            return res.status(StatusCodes.BAD_REQUEST).json({message:"Failed to create  a Post"});
        }
        return res.status(StatusCodes.ACCEPTED).send({result,userInfo});
    }
}
export default postController;