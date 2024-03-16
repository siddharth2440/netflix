import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

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


userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})


userSchema.methods = {
    createJWTToken:async function(){
        try {
            return await jwt.sign(
                {id:this._id,email:this.email,role:this.role},
                process.env.JWT_KEY,
                {
                    expiresIn:process.env.JWT_EXPIRY
                }
            )
        } catch (error) {
            console.log("erro in creating the JWT Token"+error.message);
        }
    },
    checkPassword:async function(password){
        return await bcrypt.compare(password,this.password)
    }
}

// userSchema
const userModel = new model("User",userSchema)
export default userModel;