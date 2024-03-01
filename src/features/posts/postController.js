import { StatusCodes } from "http-status-codes";
import postService from "./postService.js";
import getDataUri from "../../utils/DataURI.js";
import {v2 as  cloudinary}  from 'cloudinary';

const postServiceInstance = new postService();

export class postController{
    async getAll(req,res){
        const result = await postServiceInstance.getPosts();
        return res.status(StatusCodes.ACCEPTED).send(result);
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
        if(!result){
            return res.status(StatusCodes.BAD_REQUEST).json({message:"Failed to create  a Post"});
        }
        return res.status(StatusCodes.ACCEPTED).send(result);
    }
}
export default postController;