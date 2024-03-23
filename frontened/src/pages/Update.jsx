import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {BiSkipPrevious} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/slices/userSlice.js';
const Login = () => {
    const {user} = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const backToProfilePage = ()=>{
        navigate('/profile')
    }
    const [fullName,setFullName] = useState("")
    const [avatar,setAvatar] = useState(null)
    const [previewImage,setPreviewImage] = useState(null)

    const getImage = (e)=>{
        const uploadedImage =e.target.files[0]
        if(uploadedImage){
            setAvatar(uploadedImage)
        }

        const reader = new FileReader();
        reader.readAsDataURL(uploadedImage)
        reader.addEventListener("load",function(){
            setPreviewImage(this.result)
        })

        console.log("preview Image sets");
    }

    const dispatchUpdateProfile = async (e)=>{
        e.preventDefault()
        if(!fullName || !avatar){
            return toast.error("Please Fill all the details")
        }
        const res =await dispatch(updateProfile({avatar,fullName,userId:user._id}))
        if(!res){
            toast('Error in dispatching the Update Action')
        }
        toast.success("Successfully updated")
        navigate('/profile')
        // console.log("user id is");
        // console.log(user._id);
    }
  return (
    <div className='register bg-contain bg-center h-[100vh]  w-screen bg-black relative'>
        <div className='flex flex-col items-center justify-center gap-3'>
            <BiSkipPrevious className='text-[2.3rem] bg-red-500 text-red-200 absolute right-2 top-2 cursor-pointer rounded-md' onClick={backToProfilePage}/>
            <form noValidate onSubmit={dispatchUpdateProfile} className='h-[70%] w-[40%] rounded-lg flex flex-col gap-4 items-center flex-wrap justify-start py-2 px-4 bg-black'>
                <h1 className='font-[600] text-[2.3rem] text-white self-start'>Update Profile</h1>
                <div className="photo">
                    <label htmlFor="profileImage">
                        {
                            previewImage?
                            <img src={previewImage} alt="" />:
                            <img src="data:image/jpeg;base64,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" alt="" />
                        }
                    </label>
                    <input type="file" className='' onChange={getImage} required/>
                </div>
                <div className="username">
                    <label htmlFor="name" className='text-white'>Username : </label>
                    <input type="text" required className='outline-none px-2 py-2 rounded-md' onChange={(e)=>setFullName(e.target.value)}/>
                </div>
                <button className='text-white bg-red-400 px-3 py-1 rounded-lg shadow-[0_0_1rem_red]' type='submit'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Login