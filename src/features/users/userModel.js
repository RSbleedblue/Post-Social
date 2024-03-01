import mongoose from "mongoose";

const userSchema = mongoose.Schema([
    {
        name:
        {
            type: String,
            require: true,
        },
        email:
        {
            type: String,
            require: true,
            unique: true,
            match:[/.+\@.+\../, "Please Enter a valid Email"]
        },
        password: {
            type: String,
            require: true,
            validator: function(value){
                return /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(value)
            },
            message: "Password should be between 8-12 characters and have one special character"
        }
    }
])
export default  mongoose.model("User",userSchema);