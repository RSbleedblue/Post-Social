import mongoose from "mongoose";

const postModel = new mongoose.Schema([
    {
    caption:{
        type:String,
        trim: true,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    imgUrl:{
        type:String,
        required: true
    },
    user:{
        type : mongoose.Types.ObjectId , ref:"User"
    },
    // likes:[
    //     {
    //         type : mongoose.Types.ObjectId , ref : ""
    //     }
    // ]
    // comment:[
    //     {
    //         type : mongoose.Types.ObjectId , ref : "comment"
    //     }
    // ]

    }
])

export default mongoose.model("Post",postModel);