// userServices.js
import UserModel from "./userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mailer from "../../utils/nodemailer.js";

dotenv.config();

export default class userServices {
  constructor() {
    this.UserModel = UserModel;
    this.otps = new Map();
  }

  async otpGen(email) {
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    this.otps.set(email, {
      otp: newOtp,
      expire: new Date(Date.now() + 2 * 60 * 1000),
    });
    await mailer.sendMail({
      to: email,
      subject: "Otp for ZenvyHub SignUp",
      html: `${newOtp}`,
    });
    console.log(this.otps);
  }

  async addUser(name, email, password, userOtp) {
    const isUser = await this.UserModel.findOne({ email: email });
    if (isUser) {
      throw new Error("Email already in use!");
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      if (
        !this.otps.has(email) ||
        this.otps.get(email).otp != userOtp ||
        this.otps.get(email).expire < Date.now()
      ) {
        if (this.otps.has(email)) this.otps.delete(email);
        throw new Error("OTP invalid or expired, Regenerate new OTP.");
      }

      this.otps.delete(email);
      const newUser = await this.UserModel.create({
        name,
        email,
        password: hashedPassword,
      });

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
          const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "2h",
          });
          return { success: true, token: token };
        }
      }
    } catch (error) {
      // Error occurred
      console.error("Error in login:", error);
      return {
        success: false,
        message: "An error occurred while processing your request.",
      };
    }
  }
}
