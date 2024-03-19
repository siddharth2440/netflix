import React from 'react'
import {AiFillBackward,AiFillForward} from "react-icons/ai"
import Listitem from './Listitem.jsx'
const List = () => {
  return (
    <div>
        <span>Continue to watch</span>
        <div className="wrapper flex flex-col items-center gap-3 justify-center py-4">
            <h1 className='text-white text-[2.3rem] font-[500]'>Continue To Watch</h1>
            <div className="container flex items-center justify-center gap-3 w-[100%] min-h-[10vh] flex-wrap">
                <Listitem/>
                <Listitem/> 
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
            </div>
        </div>
    </div>
  )
}

export default List