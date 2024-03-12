import React from 'react'
import { useState } from "react"


function InputBox(props) {
    const [inputText , setInputText] = useState('');
  return (
    <div className="p-1.5 w-full rounded-lg shadow-xl bg-blue-500  flex gap-2 flex  ">
        <input type="text" className="p-2 w-full outline-none border-none shadow-lg" placeholder="Enter Todo..." 
        onChange={(e)=>{
            setInputText(e.target.value)
        }}
        value={inputText}
         />
        <button className="bg-blue-500 rounded-full   w-14 h-12 text-white" onClick={()=>{
                    props.addListTodo(inputText)
                    setInputText('')
                  
        }}>+</button>
        
        
    </div>
  )
}

export default InputBox
