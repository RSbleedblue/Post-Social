import mongoose from "mongoose";

const connectDB = async (url)=>{
    try{
        mongoose.connect(url);
        console.log("MongoDB connected Successfully");
    }
    catch(err){
        console.log(err);
    }
}
export default connectDB;