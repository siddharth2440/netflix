import React from 'react'
import {AiFillBackward} from "react-icons/ai"
import { useLocation, useNavigate } from 'react-router-dom'
const Watch = () => {
  const location = useLocation()
  const navigate = useNavigate()
  async function navigator(){
    navigate(-1)
  }
  return (
    <div className='relative h-[100vh] w-[100vw] bg-black'>
        <video src={location.state.video} autoPlay muted loop controls className='h-screen w-screen'></video>
        <div className='absolute top-8 left-2 text-white flex items-center justify-center gap-2 border px-2 py-1 rounded-md cursor-pointer'>
            <AiFillBackward onClick={navigator}/>
            <span>Back</span>
        </div>
    </div>
  )
}

export default Watch