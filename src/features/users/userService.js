import UserModel from "./userModel.js";
import bcrypt, { genSalt } from "bcrypt";

export default class userServices {
    constructor(){
        this.UserModel = UserModel;
    }
    async addUser(name,email,password){
        // Check for existing user
        const isUser =await UserModel.findOne( { email: email} );
        if(isUser){
            throw  new Error("Email already in use!");
        }
        else{ 
        //  Creating hashed password to store in the database;
            let salt = await bcrypt.genSalt();
            let hashedPassword = await bcrypt.hash(this.password,salt);
            const newUser = await UserModel.create({ name , email , hashedPassword});
            return newUser;
        }
    }
}