import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
dotenv.config();

const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized accesss!" });
  }
  try {
    var ntoken = token.split(" ")[1];
    const payload = jwt.verify(ntoken, process.env.SECRET_KEY);
    req.userID = payload.userId;
    next();
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Unauthorized",
    });
  }
};
export default jwtAuth;
