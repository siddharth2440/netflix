import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import Watch from './pages/Watch.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      {/* <Watch/> */}
      {/* <SignUp/> */}
      <Login/>
    </>
  )
}

export default App
