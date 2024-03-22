import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import Watch from './pages/Watch.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import {Route,Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      {/* <Watch/> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/watch" element={<Watch/>}></Route>
        <Route path="/movies" element={<Home type={"movie"}/>}></Route>
        <Route path="/series" element={<Home type={"series"}/>}></Route>
      </Routes>
    </>
  )
}

export default App
