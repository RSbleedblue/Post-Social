import app from "./index.js";
import dotenv from 'dotenv';
import connectDB from "./src/utils/connectDB.js";
import {Server} from "socket.io"
import http from "http"
dotenv.config();

const server = http.createServer(app)
const io = new Server(server)

async function start(){
    await connectDB(process.env.MongoDB_url);
    server.listen(process.env.PORT, () => {
        console.log("App is listening at port 3000");
    });
}
start();

export default io;