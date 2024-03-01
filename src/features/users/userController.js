// userController.js
import { StatusCodes } from "http-status-codes";
import userServices from "./userService.js";

const userService = new userServices();

export class userController {
    async signUser(req, res) {
        const { name, email, password } = req.body;
        try {
            const result = await userService.addUser(name, email, password);
            res.status(StatusCodes.ACCEPTED).send(result);
        } catch (error) {
            res.status(StatusCodes.UNAUTHORIZED).json({ message: error.message });
        }
    }
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
