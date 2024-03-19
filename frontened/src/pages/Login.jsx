import React from 'react'

const Login = () => {
  return (
    <div className='register bg-contain bg-center h-[100vh] w-full relative'>
        <div className='h-[100%] w-[100%] flex flex-col items-center justify-center'>
            <form action="" className=' h-[70%] w-[40%] rounded-lg flex flex-col gap-4 items-center flex-wrap justify-start py-2 px-4 bg-black'>
                <h1 className='font-[600] text-[2.3rem] text-white self-start'>Sign In</h1>
                <input type="text" className='border w-[80%] h-[3rem] py-1 px-2 outline-none mt-[2rem] rounded-lg'/>
                <input type="password" className='border w-[80%] h-[3rem] py-1 px-2 rounded-lg outline-none'/>
                <button className='bg-red-600 w-[80%] rounded-lg py-1 px-2 text-white h-[3rem]'>Sign In</button>
                <p className='text-white self-center text-[1rem] mt-[3rem]'>New to Netflix? <button className='underline'>Sign In</button></p>
                <p className='text-white self-center text-[0.9rem]'>This page is protected by reCAPTCHA to ensure you're not bot </p>
            </form>
        </div>
    </div>
  )
}

export default Login