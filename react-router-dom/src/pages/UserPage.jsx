import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const UserPage = () => {
  return (
    <div>
        <h1>User Page</h1>
        <Navbar />
        <Outlet/>
    </div>
  )
}

export default UserPage
