import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {validate} from "email-validator"
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/userSlice.js';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(email);
    console.log(password);


    if(!email || !password){
      return toast.error("Fill all the Details")
    }
    if(!validate(email)){
      return toast.error("Invalid Email")
    }

    if(password.length<8){
      return toast.error("Password Invalid")
    }

    const res = await dispatch(login({email,password}))
    if(!res){
      toast.error("error in dispatching")
    }
    toast.success("Logged In Successfully")
    navigate('/')
  }

  const  navigator = ()=>{
    navigate('/register')
  }
  return (
    <div className='register bg-contain bg-center h-[100vh] w-full relative'>
        <div className='h-[100%] w-[100%] flex flex-col items-center justify-center'>
            <form noValidate className=' h-[70%] w-[40%] rounded-lg flex flex-col gap-4 items-center flex-wrap justify-start py-2 px-4 bg-black' onSubmit={handleSubmit}>
                <h1 className='font-[600] text-[2.3rem] text-white self-start'>Sign In</h1>
                <input type="text" className='border w-[80%] h-[3rem] py-1 px-2 outline-none mt-[2rem] rounded-lg' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className='border w-[80%] h-[3rem] py-1 px-2 rounded-lg outline-none' onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit' className='bg-red-600 w-[80%] rounded-lg py-1 px-2 text-white h-[3rem]'>Sign In</button>
                <p className='text-white self-center text-[1rem] mt-[3rem]'>New to Netflix? <button className='text-red-300' onClick={navigator}>Sign Up</button></p>
                <p className='text-white self-center text-[0.9rem]'>This page is protected by reCAPTCHA to ensure you're not bot </p>
            </form>
        </div>
    </div>
  )
}

export default Login