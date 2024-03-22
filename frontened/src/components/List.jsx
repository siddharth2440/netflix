import React, { useEffect } from 'react'
import {AiFillBackward,AiFillForward} from "react-icons/ai"
import Listitem from './Listitem.jsx'
import { useDispatch } from 'react-redux'
import { movieDetailsSlice } from '../redux/slices/homeSlice.js'
const List = ({item}) => {
  return (
    <div>
        <div className="wrapper flex flex-col items-center gap-3 justify-center py-4">
            <h1 className='text-white text-[2.3rem] font-[500]'>{item.title}</h1>
            <div className="text-white container flex items-center justify-center gap-3 w-[100%] min-h-[10vh] flex-wrap">
                {
                  item?.content?.map((ele,idx)=>{
                    return(
                      <Listitem item={ele} key={idx}/>
                    ) 
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default List