import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Featured from '../components/Featured.jsx'
import List from '../components/List.jsx'

const Home = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <div className='otheers relative top-[10vh]'>
            <Featured type={"movie"}/>
            <div className='min-h-[100vh] bg-black'>
              <List/>
              <List/>
              <List/>
              <List/>
            </div>
        </div>
    </div>
  )
}

export default Home