import { useEffect, useState } from 'react'
import './App.css'
import { use } from 'react';
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [lenght, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char,setChar] = useState(false);

  const[Password,setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if(number) {
      str += "1234567890";
    }

    if(char) {
      str += "!@#$%^&*(){}[]";
    }

    for(let i = 0; i<lenght; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass)
  },[number,lenght,char,Password])


  const copyToClipboard =  useCallback(() => {
      window.navigator.clipboard.writeText(Password);
  },[[[Password]]])
    
 
  useEffect(() => {
    PasswordGenerator()
  },[lenght,number,char])
  return (

    <>
      <div className= 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'> 
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
        <input 
        type="text" 
        className="outline-none w-full py-1 px-3 rounded-md mr-3"
        placeholder='Password'
        value={Password}
        readOnly
          />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' 
          onClick={copyToClipboard}
        > copy </button>
        </div>
        <div className="flex justify-around flex-wrap">
        <div className='flex items-center gap-x-1 '>
          <input 
          type="range"
          value={lenght}
          min={6}
          max={100}
          className='cursor-pointer'
          onChange={(e) => {
            setLength(e.target.value);
          }}
          />
          <label> lenght: {lenght} </label>
        </div>

        <div className='flex items-center gap-x-1 '>
          <input 
          type="checkbox"
          defaultChecked = {char}
          onChange={() => {
            setChar((a) => !a);
          }}
          />  
          <label >Charchter</label>
        </div>
        

        <div className='flex items-center gap-x-1 '>
          <input 
          type="checkbox"
          defaultChecked = {number}
          onChange={() => {
            setNumber((a) => !a);
          }}
          />  
          <label > Number </label>
        </div>

        </div>
        
        

        
      </div>
    </>
  )
}

export default App
