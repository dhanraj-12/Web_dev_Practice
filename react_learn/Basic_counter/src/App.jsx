import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {

  const a = 1;
let [counter,setCount] = useState(a);

const addValue = () => {
    console.log("clicked");
    setCount(counter + 1)
}

const decValue = () => {
  console.log("clicked");
  setCount(counter - 1);

}

  
  return (
    <>
    <h1>Counter {counter} </h1>     
    <button onClick={addValue} > add Value {counter} </button>
    <br />
    <button onClick = {decValue} > decrement value {counter} </button>
    </>
  )
}

export default App
