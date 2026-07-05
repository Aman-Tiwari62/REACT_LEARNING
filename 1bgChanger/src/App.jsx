import React, {useState} from 'react'
import Button from './components/Button';

const App = () => {
  const [bgColor, setBgColor] = useState("bg-black");
  return (
    <div className= {`${bgColor} h-screen flex flex-row justify-center items-end`}>
      <div className='bg-white mb-30 flex rounded-3xl'>
        <Button setBg={setBgColor} colorName="Red" bgColor="bg-red-500" />
        <Button setBg={setBgColor} colorName="Green" bgColor="bg-green-500" />
        <Button setBg={setBgColor} colorName="Blue" bgColor="bg-blue-500" />
        <Button setBg={setBgColor} colorName="Olive" bgColor="bg-olive-500" />
        <Button setBg={setBgColor} colorName="Gray" bgColor="bg-gray-500" />
        <Button setBg={setBgColor} colorName="Yellow" bgColor="bg-yellow-500" />
        <Button setBg={setBgColor} colorName="Pink" bgColor="bg-pink-500" />
        <Button setBg={setBgColor} colorName="Purple" bgColor="bg-purple-500" />
        <Button setBg={setBgColor} colorName="Lavender" bgColor="bg-violet-200" />
        <Button setBg={setBgColor} colorName="White" bgColor="bg-white" />
        <Button setBg={setBgColor} colorName="Black" bgColor="bg-black" textColor="white" />
      </div>
    </div>
  )
}

export default App




