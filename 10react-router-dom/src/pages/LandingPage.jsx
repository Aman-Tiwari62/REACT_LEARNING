import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="/login">Go to Login</Link>
      <br/>
      <Link to="/register">Go to Register</Link>
    </div>
  )
}

export default LandingPage
