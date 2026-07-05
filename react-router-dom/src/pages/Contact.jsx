import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  )
}

export default Contact
