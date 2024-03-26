import React, { useState } from 'react'
function App() {
  const [inpTxt , setInpTxt] = useState('');
  const [recipe , setRecipe] = useState('');
  const [recipeName , setRecipeName] = useState('');
  const [cuisine , setCuisine] = useState('');

  const apiReq = async () => {
    const res = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${inpTxt}`,{
      headers : {
        "X-Api-Key" : "WvN7UBmzmUbNYSMYEGqNdg40eJ3p199mYTwHnc1J",
        "contentType" : "application/json",
      }
    })
  }
 
  return (
      <>
      <input type="text" onChange={(e)=>{
        setInpTxt(e.target.value);
      }} />
      <button onClick={apiReq}>Call Api</button>
      </>
  )
}

export default App;