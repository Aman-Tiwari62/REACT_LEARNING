import React, {useEffect, useState, useCallback} from 'react'

// static variables are put outside the component to avoid re-creation on every render.
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 26
const lowercase = uppercase.toLowerCase(); // 26
const numberList = "0123456789"; // 10
const specialChars = "@#$%&*"; // 6

const App = () => {

  const [password, setPassword] = useState("abcd");
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [len, setLen] = useState(8);
  const [msg, setMsg] = useState("");

  const copyToClipboard = async () => {
  try {
      await navigator.clipboard.writeText(password);
      setMsg("Password Copied to Clipboard.")
      console.log("copied")
    } catch (err) {
      setMsg("Failed to copy.")
      console.error("Failed to copy:", err);
    }
  };

  const generatePassword = useCallback(() => {
    let string = "";
    let charPool=uppercase+lowercase;
    string+=uppercase[Math.floor(Math.random()*26)];
    string+=lowercase[Math.floor(Math.random()*26)];
    if(includeNumbers){
      string+=numberList[Math.floor(Math.random()*10)];
      charPool += numberList+numberList;
    } 
    if(includeSpecial){
      string+=specialChars[Math.floor(Math.random()*6)];
      charPool+=specialChars+specialChars+specialChars+specialChars
    } 
    console.log(charPool)
    let required = len-string.length;
    for(let i=0; i<required; i++){
      string+=charPool[Math.floor(Math.random()*charPool.length)];
    }
    string = string.split('').sort(() => Math.random() - 0.5).join('');
    setPassword(string);
  }, [includeNumbers, includeSpecial, len]);

  useEffect(()=>{
    generatePassword();
    setMsg("");
  },[includeNumbers,includeSpecial,len]);

  return (
    <div className='h-screen bg-black flex flex-col gap-5 justify-center items-center'>
      <div className='bg-gray-700 rounded-2xl'>
          <div className='flex m-7 text-3xl font-semibold'>
            <div className="w-120 h-17 bg-white rounded-l-2xl flex items-center p-3 text-orange-700">{password}</div>
            <div className='bg-blue-600 w-30 rounded-r-2xl flex justify-center items-center text-white cursor-pointer' onClick={copyToClipboard}>Copy</div>
          </div>
          <div className='text-amber-700 text-2xl m-7 font-semibold flex justify-center gap-5'>
              <label className="text-amber-700 text-2xl font-semibold flex items-center gap-4">
                <input
                  type="range"
                  min="8"
                  max="20"
                  value={len}
                  onChange={(e) => setLen(Number(e.target.value))}
                  className="w-60 cursor-pointer"
                  />
                  Length ({len})
              </label>
            </div>
            <div className='text-amber-700 text-2xl m-7 font-semibold flex justify-center gap-5'>
              <label className='flex items-center gap-1'>
                <input
                className='scale-125'
                  type="checkbox"
                  name="numbers"
                  checked={ includeNumbers }
                  onChange={(e) => setIncludeNumbers(!includeNumbers)}
                  />
                  Numbers
            </label>
              <label className='flex items-center gap-1'>
                <input
                className='scale-125'
                  type="checkbox"
                  name="specials"
                  checked={ includeSpecial }
                  onChange={(e) => setIncludeSpecial(!includeSpecial)}
                  />
                  Special Characters
            </label>
          </div>
      </div>
      <p className='text-green-400 font-semibold'>{msg}</p>
    </div>
  )
}

export default App

