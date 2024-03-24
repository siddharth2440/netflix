import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiFillCloseSquare} from "react-icons/ai"
import { useSelector } from 'react-redux'
const Profile = () => {
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state.auth)
  return (
    <div className='bg-black min-h-[100vh] w-screen flex flex-col items-center justify-center '>
        <AiFillCloseSquare onClick={()=>navigate('/')} className='text-[3.4rem] cursor-pointer text-red-500 font-[600] absolute right-2 top-1 '/>
        <div className='text-white border h-[60vh] py-2 px-3 min-w-[40vw] shadow-[0_0_1rem_red] rounded-md'>
            <h1 className='text-center text-[1.5rem] opacity-90'>Your Profile</h1>
            <div className='mt-3 flex flex-col gap-3 '>
                <img src={user?.avatar?.secure_url} alt="" />
                <div className="name flex items-center justify-between mt-4 w-[70%] m-auto">
                    <span>Username :</span>
                    <h1 className='capitalize text-red-400'>{user?.fullName}</h1>
                </div>
                <div className="email flex items-center justify-between w-[70%] m-auto">
                    <span>Email</span>
                    <h1 className='  text-red-400'>{user?.email}</h1>
                </div>
                <div className="role flex items-center justify-between w-[70%] m-auto">
                    <span>Role</span>
                    <h1 className='capitalize text-red-400 '>{user?.role}</h1>
                </div>
            </div>
            <button className='shadow-[0_0.1rem_1rem_red] mt-5 w-[90%] my-auto bg-red-500 py-1 px-2 rounded-sm' onClick={()=>navigate('/update')} >Update</button>
        </div>
    </div>
  )
}

export default Profile