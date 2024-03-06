// userController.js
import { StatusCodes } from "http-status-codes";
import userServices from "./userService.js";
import getDataUri from "../../utils/DataURI.js";
import {v2 as cloudinary} from 'cloudinary';
import { upload } from "../../utils/multerConfig.js";

const userService = new userServices();

export class userController {
    async signUser(req, res) {
        upload.fields([
            {name:'profilePic',maxCount: 1},
            {name:'coverPic',maxCount:1}
        ])(req,res,async (err)=>{
            if(err){
                return res.status(StatusCodes.BAD_REQUEST).json({message:"Error While Uploading User Profile or CoverPIc"});
            }
            const { name, email, password } = req.body;
        const profilePic = req.files['profilePic'][0];
        const coverPic = req.files['coverPic'][0];
        console.log(profilePic);

        const profilePicURI = getDataUri(profilePic);
        const coverPicURI = getDataUri(coverPic);

        const getCloudProfile = await cloudinary.uploader.upload(profilePicURI.content);
        const getCloudCover = await cloudinary.uploader.upload(coverPicURI.content);

        const profileUrl = getCloudProfile.url;
        const coverUrl = getCloudCover.url;

        try {
            const result = await userService.addUser(name, email, password,profileUrl,coverUrl);
            res.status(StatusCodes.ACCEPTED).send(result);
        } catch (error) {
            res.status(StatusCodes.UNAUTHORIZED).json({ message: error.message });
        }
    })};
    async login(req,res){
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(StatusCodes.UNAUTHORIZED).json({message:"Please enter email and password"});
        }
        try{
            const result = await userService.login(email,password);
            if(!result){
                return res.status(StatusCodes.UNAUTHORIZED).json({message:"Login Failed"});
            }
            else{
                return res.status(StatusCodes.ACCEPTED).json({
                    email:"Email",
                    result: result,
                })

            }
        }
        catch(err){
            console.log(err);
        }
    }
}
export default userController;
