import React from 'react'
import { useSelector } from 'react-redux'

function Display({count}) {
    console.log('display component rendering.....')
    const count2 = useSelector((state)=>state.counter.value)
  return (
    <h1>{count} : {count2}</h1>
  )
}

export default Display
