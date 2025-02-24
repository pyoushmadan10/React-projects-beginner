import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password,setPassword] = useState("")
  const passwordref=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(number) str+= "0123456789"
     if(char) str+="!@#$%^&*"

     for(let i=1;i<length;i++){
      let ch=Math.floor(Math.random()*str.length+1)
     pass+=str.charAt(ch) 
     }
     setPassword(pass)

  },[length,number,char,setPassword])

  const copyPassword=useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
    window.alert("copied password to clipboard")
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordref}
            readOnly
        />
      <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() =>{setNumber((prev)=>!prev)}}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() =>{setChar((prev)=>!prev)}}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
    </div>
    </div>
    </>
  )
}

export default App
