// userController.js
import { StatusCodes } from "http-status-codes";
import userServices from "./userService.js";

const userService = new userServices();

export class userController {
  async otp(req, res) {
    const { email } = req.body;
    await userService.otpGen(email);
    res.status(StatusCodes.OK).json({ message: "OTP Generated" });
  }

  async signUser(req, res) {
    const { name, email, password, userOtp } = req.body;
    try {
      const result = await userService.addUser(name, email, password, userOtp);
      console.log(result);
      res.status(StatusCodes.ACCEPTED).send(result);
    } catch (error) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: error.message });
    }
  }
  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Please enter email and password" });
    }
    try {
      const result = await userService.login(email, password);
      if (!result) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: "Login Failed" });
      } else {
        return res.status(StatusCodes.ACCEPTED).json({
          email: "Email",
          result: result,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
export default userController;
