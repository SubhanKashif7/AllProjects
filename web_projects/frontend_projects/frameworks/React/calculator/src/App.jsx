import { useEffect, useState } from 'react'


function App() {
  const [expression , setExpression] = useState('');

  const handleKeyDown = (event) => {
    const key = event.key;
    if (/\d/.test(key)) {
      setExpression((prev) => prev + key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
      setExpression((prev) => prev + key);
    } else if (key === '.' && !expression.includes('.')) {
      setExpression((prev) => prev + key);
    } else if (key === 'Enter') {
      evaluateExpression();
    } else if (key === 'Backspace') {
      clearDigit();
    } else if (key === 'Escape') {
      clearExpression();
    }
  };


  const clearExpression = () => {
    setExpression('');
  }

  const clearDigit = () => {
    const arr = Array.from(expression);
    arr.pop();
    const newString = arr.join('');
    setExpression(newString)
  }

  const evaluateExpression = () => {
    try {
      const evaluatedExpression = eval(expression.toString());
      setExpression(evaluatedExpression.toString())
    } catch (error) {
      setExpression("Err")
    }
  }

  useEffect(()=>{
    window.addEventListener("keydown",handleKeyDown);
    return () => {
      window.removeEventListener("keydown",handleKeyDown)
    };
  },[expression])


  
  
  return (
      <div className='w-full h-screen flex justify-center items-center bg-gray-800'>
          <div style={{width : "300px"}} className='p-2 bg-white flex justify-center items-center rounded-md gap-3 flex-col'>
            <input type="text" placeholder='Expression Goes Here'  value={expression} readOnly className='p-3 outline-none border-2 rounded-sm'/>
            <div className='grid grid-cols-4 w-full place-items-center gap-1'>
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={clearExpression}>C</button>
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={clearDigit}>DE</button>
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={()=>setExpression((prev)=>prev+="**")}>**</button>
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={()=>setExpression((prev)=>prev+="/")}>/</button>

                <button className='h-14 w-14  text-white rounded-full bg-gray-700' onClick={()=>setExpression((prev)=>prev+="7")}>7</button>
                <button className='h-14 w-14  text-white rounded-full bg-gray-700' onClick={()=>setExpression((prev)=>prev+="8")}>8</button>
                <button className='h-14 w-14  text-white rounded-full bg-gray-700' onClick={()=>setExpression((prev)=>prev+="9")}>9</button>
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={()=>setExpression((prev)=>prev+="*")}>*</button>
              

                <button className='h-14 w-14  text-white rounded-full bg-gray-700' onClick={()=>setExpression((prev)=>prev+="4")}>4</button>
                <button className='h-14 w-14  text-white rounded-full bg-gray-700' onClick={()=>setExpression((prev)=>prev+="5")}>5</button>
                <button className='h-14 w-14  text-white rounded-full bg-gray-700' onClick={()=>setExpression((prev)=>prev+="6")}>6</button>
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={()=>setExpression((prev)=>prev+="-")}>-</button>


                <button className='h-14 w-14  text-white rounded-full bg-gray-700' onClick={()=>setExpression((prev)=>prev+="1")}>1</button>
                <button className='h-14 w-14  text-white rounded-full bg-gray-700' onClick={()=>setExpression((prev)=>prev+="2")}>2</button>
                <button className='h-14 w-14  text-white rounded-full bg-gray-700' onClick={()=>setExpression((prev)=>prev+="3")}>3</button>
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={()=>setExpression((prev)=>prev+="+")}>+</button>
                
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={()=>setExpression((prev)=>prev+="0")}>0</button>
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={()=>setExpression((prev)=>prev+=".")}>.</button>
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={()=>{
                  evaluateExpression()
                }}>=</button>
                <button className='h-14 w-14  text-white rounded-full bg-slate-600' onClick={()=>setExpression((prev)=>prev+="%")}>%</button>





            </div>
          </div>
      </div>
  )
}

export default App
