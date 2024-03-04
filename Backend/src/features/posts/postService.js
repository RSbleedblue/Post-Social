import userModel from "../users/userModel.js";
import postModel from "./postModel.js";

export default class postService{
    constructor() {
        this.postModel = postModel;
    }
    async getPosts(){
        const result = postModel.find();
        return result;
    }
    async addPost(caption,title,imgUrl,user){
        let newPost= await this.postModel.create({caption,title,imgUrl,user});
        await userModel.findByIdAndUpdate(user,{$push : {posts: newPost._id}});
        return newPost;
    }
}