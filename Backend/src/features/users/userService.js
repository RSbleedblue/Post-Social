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
    async addUser(name, email, password) {
        const isUser = await this.UserModel.findOne({ email: email });
        if (isUser) {
            throw new Error("Email already in use!");
        } else {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = await this.UserModel.create({ name, email, password: hashedPassword });
            return newUser;
        }
    }
    async login(email, password) {
        try {
            const user = await this.UserModel.findOne({ email: email });
            if (!user) {
                // User not found
                return { success: false, message: "Invalid email or password." };
            } else {
                // Compare hashed passwords
                const validPassword = await bcrypt.compare(password, user.password);
                if (!validPassword) {
                    // Invalid password
                    return { success: false, message: "Invalid email or password." };
                } else {
                    // Password is valid, generate JWT token
                    const payload = { email: user.email, userId: user._id };
                    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2h' });
                    return { success: true, token: token };
                }
            }
        } catch (error) {
            // Error occurred
            console.error("Error in login:", error);
            return { success: false, message: "An error occurred while processing your request." };
        }
    }    
}
