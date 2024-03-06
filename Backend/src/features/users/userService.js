// userServices.js
import UserModel from "./userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default class userServices {
    constructor() {
        this.UserModel = UserModel;
    }
    async addUser(name, email, password, profileUrl, coverUrl) {
        const isUser = await this.UserModel.findOne({ email: email });
        if (isUser) {
            throw new Error("Email already in use!");
        } else {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = await this.UserModel.create({ name, email, password: hashedPassword, profileUrl, coverUrl });
            return newUser;
        }
    }
    async login(email, password) {
        try {
            const user = await this.UserModel.findOne({ email: email }).select("+password");
            if (!user) {
                return { success: false, message: "Invalid email or password." };
            } else {
                const validPassword = await bcrypt.compare(password, user.password);
                if (!validPassword) {
                    return { success: false, message: "Invalid email or password." };
                } else {
                    const payload = { email: user.email, userId: user._id };
                    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2h' });
                    return { success: true, token: token };
                }
            }
        } catch (error) {
            console.error("Error in login:", error);
            return { success: false, message: "An error occurred while processing your request." };
        }
    }  
    async findUser(id){
        const user = await this.UserModel.findById(id);
        if(!user){
            return { success: false, message: "Couldnt Found User!" };
        }
        return user; 
    }  
    async findUserforPost(id){
        const user = await this.UserModel.findById(id).select("-posts -name -email");
        if(!user){
            return { success: false, message: "Couldnt Found User!"};
        }
        return user;
    }
}
