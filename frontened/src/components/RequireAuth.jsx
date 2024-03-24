import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const requireAuth = ({allowedRoles}) => {
    const {isLoggedIn,role} = useSelector((state)=>state.auth)
    const ro = allowedRoles.find((r)=>r==role)
    console.log(ro);
  return (
    <>
        {
            isLoggedIn && allowedRoles.find((r)=>r==role)?(
                <Outlet/>
            ):isLoggedIn?(<Navigate to="/deny"/>):
            (<Navigate to="/login"/>)
        }
    </>
  )
}

export default requireAuth