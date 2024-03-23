import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Watch from './pages/Watch.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import RequireAuth from './components/RequireAuth.jsx'
import {Route,Routes} from "react-router-dom"
import Deny from './pages/Deny.jsx'
import Profile from './pages/Profile.jsx'
import Update from "./pages/Update.jsx"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<Home type={"movie"}/>}></Route>
        <Route path="/series" element={<Home type={"series"}/>}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/deny" element={<Deny/>}></Route>

        <Route element={<RequireAuth allowedRoles={["USER","ADMIN"]}/>}>
          <Route path="/watch" element={<Watch/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
        </Route>


      </Routes>
    </>
  )
}

export default App
