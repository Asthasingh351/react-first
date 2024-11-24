import { useState , useCallback , useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(5);
  const [num, setNum] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGen = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str += "0123456789"
    if(characters) str += "!@#$%^&*+"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  } ,[length , num , characters,setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordGen()},[length , num , characters,passwordGen])




  return (
    <>
    <div className="w-full max-w-md mx-auto rounded-lg shadow-md px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center my-3'>password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}>
          
        </input>
        <button onClick={copyPassword} className='bg-blue-600 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range" 
          min= {5}
          max ={100}
          value = {length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
           />
           <label>length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked = {num} id='numberinput' onChange={()=>{setNum((prev)=> !prev);}} />
          <label htmlFor='numberinput'>Numbers</label>
        </div>
        <input type="checkbox" defaultChecked = {characters} id='charinput' onChange={()=>{setCharacters((prev)=> !prev);}} />
          <label htmlFor='charinput'>Characters</label>
      </div>
    </div>
    </>
  )
}

export default App
