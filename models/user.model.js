import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName:{
        type:String,
        minLength:[5,"Fullname must atleast of 5 characters"],
        required:true,
        trim:true,
        maxLength:[20,"Fullname not be greater than the 20 characters"]
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        minLength:[8,"password atleast contain 8 characters"],
        required:[true,"password is required"],
        trim:true,
        select:false
    },
    avatar:{
        public_id:{
            type:String
        },
        secure_url:{
            type:String
        }
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER"
    }
},{timestamps:true})

const userModel = new model("User",userSchema)
export default userModel;