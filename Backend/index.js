import express from "express";
import jwtAuth from "./src/utils/jwt.js";
import userRouter from "./src/features/users/userRoutes.js";
import postRouter from "./src/features/posts/postRoutes.js";

import cloudinaryConnect from "./src/utils/cloudinary.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
cloudinaryConnect();

// Routing
app.use("/api/users", userRouter);
app.use("/api/users/posts", jwtAuth, postRouter);

export default app;
