import User from "../models/user.model.js"
import cloudinary from "cloudinary"
import upload from "../middlewares/multer.middleware.js"
import fs from "fs/promises"
import movieModel from "../models/movie.model.js"
const cookieOptions = {
    maxAge:7*24*60*60*1000,
    httpOnly:true,
    secure:true
}

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
    
    const token =await user.createJWTToken()
    await user.save();

    res.cookie("token",token,cookieOptions)
    return res.status(200).json({
        success:true,
        message:"User created Sucessfully"
    })
}

const loginUser = async (req,res)=>{
    const {email,password} = req.body
    // console.log("Abrar");
    // console.log(email);
    // console.log(password);
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"Fill all the Details"
        })
    }

    const isFound = await User.findOne({email:email}).select("+password")
    // console.log("isFound ");
    // console.log(isFound);
    if(!isFound){
        return res.status(400).json({
            success:false,
            message:"User not Exists"
        })
    }

    const checkPassword = await isFound.checkPassword(password)
    if(!checkPassword){
        return res.status(400).json({
            success:false,
            message:"Invalid Details"
        })
    }
    console.log("Generating the token");

    const token = await isFound.createJWTToken();
    res.cookie("token",token,cookieOptions)
    isFound.password = undefined
    // console.log(isFound);
    return res.status(200).json({
        success:true,
        message:"LoggedIn Successfully",
        isFound
    })
}

const getProfile = async (req,res)=>{
    const {id} = req.user
    console.log("User Id "+id);

    const fetchUserDetails = await User.findOne({_id:id})
    if(!fetchUserDetails){
        return res.status(400).json({
            success:false,
            message:"Invalid User"
        })
    }

    return res.status(200).json({
        success:true,
        message:"User Details Given Below",
        fetchUserDetails
    })
}
const logout = async (req,res)=>{
    res.cookie("token",null,{
        secure:true,
        httpOnly:true,
        maxAge:0
    })
    return res.status(200).json({
        success:true,
        message:"User logged Out Successfully"
    })
}

const getAllUserInfo = async (req,res)=>{
    const getUsers =await User.find({}).limit(10)

    return res.status(200).json({
        success:true,
        message:"All Users are there",
        getUsers
    })

}


const updateUserInfo =async (req,res)=>{
    // console.log(req.body);
    const {fullName,avatar,userId} = req.body;
    console.log(fullName);
    console.log(userId);
    console.log(req.body);
    if(!fullName){
        return res.status(400).json({
            success:false,
            message:"Fill All the fields"
        })
    }

    const {id} = req.user
    if(id!==userId){
        return res.status(400).json({
            success:false,
            message:" Invalid Id"
        })
    }

    const user = await User.findOne({_id:id});
    console.log(user);
    user.fullName = fullName;
    console.log("Full Sets");
    if(!user){
        return res.status(400).json({
            success:false,
            message:"User is not exists"
        })
    }
    // console.log(avatar);
    // if(!req.file){
    //     console.log("file is not there");
    //     return res.status(400).json({
    //         success:false,
    //         message:"File is not there to upload"
    //     })
    // }
    if(req.file){
        await cloudinary.v2.uploader.destroy(user.avatar.public_id)
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path,{
                folder:"user"
            })

            if(result){
                user.avatar.public_id = result.public_id,
                user.avatar.secure_url = result.secure_url
            }
            await user.save();

            // remove the file from the server

            fs.rm(`uploads/${req.file.filename}`)
        } catch (error) {
            console.log("Error in uploading the file to the Backened Side");
        }
    }
    await user.save();
    return res.status(200).json({
        success:true,
        message:"User updated Successfully"
    })
}

const deleteTheUser = async (req,res)=>{
    const {id} = req.user
    const {userId} = req.params
    const findThatUser = await User.findOne({_id:userId})
    if(!findThatUser){
        return res.status(400).json({
            success:false,
            message:"User doen't exist"
        })
    }
    const deleteUser = await User.deleteOne({_id:userId});
    if(!deleteUser){
        return res.status(400).json({
            success:false,
            message:"User not deleted"
        })
    }

    return res.status(200).json({
        success:true,
        message:"User deleted successfully"
    })
}


export {
    registerUser,loginUser,getProfile,logout,getAllUserInfo,updateUserInfo,deleteTheUser
}