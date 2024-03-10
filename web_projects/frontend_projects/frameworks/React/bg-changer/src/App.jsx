import { useState } from 'react'
import "./index.css"


function App() {
  const [color, setColor] = useState("blue")

  

  return (
    <div className='w-full h-screen' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-lg'>


          <button className='outline-none px-4 py-1 rounded-lg bg-red-700 text-white shadow-lg' onClick={()=>setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-lg bg-yellow-500 text-white shadow-lg' onClick={()=>setColor("yellow")} >Yellow</button>
          <button className='outline-none px-4 py-1 rounded-lg bg-blue-500 text-white shadow-lg' onClick={()=>setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-lg bg-pink-500 text-white shadow-lg' onClick={()=>setColor("pink")} >Pink</button>
          <button className='outline-none px-4 py-1 rounded-lg bg-white text-white shadow-lg  text-black' onClick={()=>setColor("white")}>White</button>



        </div>
      </div>
    </div>
  )
}

export default App
