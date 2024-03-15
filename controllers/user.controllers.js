import User from "../models/user.model.js"
import cloudinary from "cloudinary"
import upload from "../middlewares/multer.middleware.js"
import fs from "fs/promises"
const registerUser =async (req,res)=>{
    const {fullName,email,password} = req.body;
    console.log("API Called");
    if( !fullName || !email || !password){
        return res.status(400).json({
            success:false,
            message:"Fill all the details"
        })
    }

    const emailFound = await User.findOne({email})
    if(emailFound){
        return res.status(400).json({
            success:false,
            message:"Email already Exists"
        })
    }

    const user = new User({fullName,email,password,
        avatar:{
            public_id:'a;kfdkfsdmf',
            secure_url:"isdfsdfksjdfskdjf"
        }
    })

    if(req.file){
        try {
            const res = await cloudinary.v2.uploader.upload(req.file.path,{
                folder:"netflix",
                crop:"fill"
            })

            if(res){
                user.avatar.public_id=res.public_id,
                user.avatar.secure_url = res.secure_url

                //remove file which is stored in the Server
                fs.rm(`uploads/${req.file.filename}`)
            }
        } catch (error) {
            return res.status(400).json({
                success:false,
                message:"Can't registered"
            })
        }
    }

    await user.save();

    return res.status(200).json({
        success:true,
        message:"User created Sucessfully"
    })
}

export {
    registerUser
}