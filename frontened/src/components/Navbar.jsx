import React, { useEffect, useState } from 'react'
import image from "../assets/netflixLogo.png"
import {Link} from 'react-router-dom'
import {AiOutlineFileSearch,AiTwotoneBell,AiOutlineArrowDown} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/userSlice'
import toast from 'react-hot-toast'
const Navbar = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth)
    const {isLoggedIn} = useSelector((state)=>state.auth)
    const [openclose,setopenclose] = useState(false);
    const logoutHandler =async ()=>{
        const res = await dispatch(logout())
        if(!res){
            return toast.error("Unable to dispatch the Logout")
        }
        return
    }
  return (
    <div className='fixed top-0 grid grid-cols-[20%,60%,20%] items-center bg-black w-full h-auto text-white z-50'>
        <div className="logo w-[60%] ml-4 h-[4.7rem]">
            <img src={image} alt="" className='h-[100%] w-[100%]'/>
        </div>
        <div className="links flex items-center justify-center gap-9">
            <Link to="/"><h2>Homepage</h2></Link>
            <Link to="/series"><h2>Series</h2></Link>
            <Link to="/movies"><h2>Movies</h2></Link>
            <h2>News and Popular</h2>
            <h2>My List</h2>
        </div>
        <div className="others flex items-center justify-center gap-1  h-[10vh] px-3"> 
            <AiOutlineFileSearch className='text-[1.4rem]'/>
            <p className=' mx-auto text-[1.4rem] tracking-wider'>KID</p>
            <AiTwotoneBell className='text-[1.4rem]'/>
            <div className='flex items-center justify-between  py-2 px-2 cursor-pointer relative' onClick={()=>setopenclose(!openclose)}>
                {
                    isLoggedIn ?
                    <img src={user.avatar.secure_url} alt="user image" className='rounded-md h-[3rem]'/>:
                    <img src="data:image/jpeg;base64,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" alt="kid image" className='rounded-md h-[3rem]' />
                }   
                <AiOutlineArrowDown className=' ml-3'/>
                {openclose && <div className='absolute top-[10vh] right-2 w-[8vw] bg-white-900 rounded-md flex flex-col items-center justify-center gap-2 py-2'>
                    {isLoggedIn ? 
                        (<div className='text-white-800 shadow-[0_0_1rem_red] px-4 py-1 rounded-sm'>
                            <button onClick={logoutHandler}>Logout</button>
                            <Link to="/profile"><h2 className='pt-2 text-center'>Profile</h2></Link>
                        </div>) :
                        (<div className='text-white-800 shadow-[0_0_1rem_red] px-4 py-1 rounded-sm'>
                            <Link to="/register" className='bg-black text-white '><h2>Register</h2></Link>
                            <Link to="/login" className='bg-black text-white text-center'><h2 className='pt-2'>Login</h2></Link>
                        </div>)
                    }
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Navbar