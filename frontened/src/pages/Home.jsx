import React, { useEffect, useReducer, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Featured from '../components/Featured.jsx'
import List from '../components/List.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {homeSlice} from '../redux/slices/homeSlice.js'

const Home = ({type}) => {
  const dispatch = useDispatch()
  const [genre,setGenre] = useState(null)
  const {lists} = useSelector((state)=>state.list)
  useEffect(()=>{
    dispatch(homeSlice({type,genre}));
  },[type,genre])
  return (
    <div className='bg-black'>
        <Navbar/>
        <div className='otheers relative top-[10vh]'>
            <Featured type={type} setGenre={setGenre}/>
            <div className='min-h-[100vh] bg-black'>
              {
                lists.map((ele,idx)=>
                  // <h1>{ele}</h1>
                  <List item={ele} key={idx}/>
                )
              }
            </div>
        </div>
    </div>
  )
}

export default Home