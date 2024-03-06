import multer from "multer";
import path from "path";

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
  export const upload = multer({storage});