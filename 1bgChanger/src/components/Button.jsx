import React from 'react'

const Button = ({ setBg, colorName, bgColor, textColor="black"}) => {
  return (
    <button onClick={()=>setBg(bgColor)} className={`px-6 py-3 font-semibold rounded-3xl shadow-md ${bgColor} m-4 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer text-${textColor}`}>{colorName}</button>
  )
}

export default Button
