import app from "./index.js";
import dotenv from 'dotenv';
import connectDB from "./src/utils/connectDB.js";

dotenv.config();

async function start(){
    await connectDB(process.env.MongoDB_url);
    app.listen(3000, () => {
        console.log("App is listening at port 3000");
    });
}
start();
