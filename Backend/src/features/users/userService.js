// userServices.js
import UserModel from "./userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from "../tokens/tokenModel.js"

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
                const validPassword = bcrypt.compare(password, user.password);
                if (!validPassword) {
                    // Invalid password
                    return { success: false, message: "Invalid email or password." };
                } else {
                    // Password is valid, generate JWT token
                    const payload = { email: user.email, userId: user._id };
                    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2h' }); 
                    
                    // Update the user's tokens array with the new token
                    
                     await  this.addToken(token, user._id);

                    return {
                        success: true,
                        email: user.email,
                        token: token
                    };
                }
            }
        } catch (error) {
            // Error occurred
            console.error("Error in login:", error);
            return { success: false, message: "An error occurred while processing your request." };
        }
    }
    async addToken(token, userId){
        try {
                let tokenResult;
                const user = await this.UserModel.findById(userId);
                const existingUser = await Token.findOne({ user: userId });
                if (existingUser) {
                    // If the user already exists, add the token to the existing user
                    existingUser.tokens.push(token);
                    tokenResult = await existingUser.save();
                } else {
                    // If the user doesn't exist, create a new user document with the token
                    const newToken = new Token({
                        user: userId,
                        tokens: [token] 
                    });
                    tokenResult = await newToken.save();
                }
            
                if (!tokenResult) {
                    return { success: false, message: "Token could not be saved!!!" };
                } else {
            user.tokens.push(token);
                    await user.save();
                    return { success: true, message: "Token added successfully." };
                }
            } catch (error) {
                console.error('Error adding token:', error);
                throw error; 
            }
        }

    async logOutAll(userId){
        try {
            // Find the user by ID
            const user = await this.UserModel.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }

            // Remove all tokens associated with the user
            const logOutResult = await Token.deleteMany({ user: userId });

            if(!logOutResult){
                return { success: false, message: "An error occurred while processing your request." };
            }
            else{
                // Clear the tokens array in the user document
                user.tokens = [];
                await user.save();
                return { success: true, message: "Logged Out Successfully from all the devices" };
            }
        } catch (error) {
            console.error('Error logging out from all devices:', error);
            throw error;
        }
    }
}