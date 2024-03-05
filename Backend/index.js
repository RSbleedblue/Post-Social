import express from "express";
import jwtAuth from "./src/utils/jwt.js";
import userRouter from "./src/features/users/userRoutes.js";
import postRouter from "./src/features/posts/postRoutes.js";
import multer from "multer";
import path from "path";
import cloudinaryConnect from "./src/utils/cloudinary.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
  file: (req, file, cb) => {
    cb(null, file.buffer);
  },
});
cloudinaryConnect();
var upload = multer({ storage });
app.use(upload.single("imgPath"));

//app.use(express.urlencoded());
// Routing
app.use("/api/users", userRouter);
app.use("/api/users/posts", jwtAuth, postRouter);

export default app;
