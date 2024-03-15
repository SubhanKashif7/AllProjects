
import { useState } from 'react'

function App() {
  const [quote , setQuote] = useState('');
  const [author , setAuthor] = useState('');
  const [category , setCategory] = useState('');
  

  let quotesCategory = [
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communication",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success"
  ];

  const handleBtnClick = () => {
    apiReq()
  }
  



  const apiReq = async () => {
    try {
      const rand = Math.floor(Math.random()*quotesCategory.length);
      const category = quotesCategory[rand]
      let response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`,{
        headers : {
          "X-Api-Key" : "D6V/TiXyFlbZermobEBENw==D2lv8xoOJZ4Ti6t2"
        }
      }).then((response)=>{
        return response.json();
      }).then((response)=>{
        setQuote(response[0].quote);
        setAuthor(response[0].author);
        setCategory(response[0].category)
      })
      

    } catch (error) {
      throw error
    }
  }

 return(
    <div className='w-full h-screen bg-black flex justify-center items-center' >
        <div className='bg-white p-2 rounded-md' style={{width : "300px"}} >
          <h1 className='text-2xl font-bold text-center font-sans p-2'>Quote App By Subhan Kashif</h1>
          <br />
          <p className='text-lg font-medium text-center'>{quote}</p>
          <br />
          <p className='text-center  font-bold'>Author : {author}</p>
          <p className='text-center font-serif'> Category : {category}</p>
          <br />
          <button className='bg-black text-white py-1.5 px-4 w-full rounded-md' onClick={handleBtnClick}>Get</button>
        </div>
    </div>
 )
}

export default App
