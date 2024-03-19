import React, { useRef, useState } from 'react'

const SignUp = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = (e) =>{
        e.preventDefault();
        setEmail(emailRef.current.value)
    }
    const handleFinish = (e)=>{
        e.preventDefault();
        setPassword(passwordRef.current.value)
    }

  return (
    <div className='register bg-contain bg-center h-[100vh] w-full relative'>
        <div className='z-50 absolute text-white gap-2 flex flex-col items-center justify-center h-[100%] w-[100%]'>
            <h1 className='text-[3.4rem] font-[500]'>Unlimited movies, TV shows, and more</h1>
            <p className='text-[2rem] font-[500]'>Watch anywhere , Cancel anytime</p>
            <span>Ready to watch? Enter your email and restart your membership</span>
            <form className='w-[40%] rounded-lg flex justify-center items-center'>
                {emailRef ?
                (<>
                    <input type="email" placeholder='your email' className='text-black outline-none w-[85%] py-1 px-2 h-10' ref={emailRef}/>
                    <button className='bg-red-600 text-white h-[100%] w-[15%] overflow-hidden' onClick={handleStart} >Get Started</button>
                </>):
                (<>
                    <input type="password" placeholder='your email' className='text-black outline-none w-[85%] py-1 px-2 h-10' ref={passwordRef}/>
                    <button className='bg-red-600 text-white h-[100%] w-[15%] overflow-hidden' onClick={handleFinish} >Sign Up</button>
                </>)}
            </form>
        </div>
    </div>
  )
}

export default SignUp