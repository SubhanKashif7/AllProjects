import React, { useEffect, useState } from 'react'


function App() {
  const [searchInputText , setSearchInputText] = useState('');
  const [city_name , setCity_name] = useState('');
  const [weather_type , setWeatherType] = useState('');
  const [weatherData , setWeatherData] = useState('')
  const [mintemp , setminTemp] = useState('');
  const [maxtemp , setmaxTemp] = useState('');
  const [feelsLike , setFeelsLike] = useState('');
  const [windspeed , setWindSpeed] = useState('');
  const [humidity , setHumidity] = useState('');

  const apiReq = async (cityName) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=850749933455c871b65b02f3e980430a&units=metric      `);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeatherData(data);
      setCity_name(data.name);
      setFeelsLike(data.main.feels_like);
      setHumidity(data.main.humidity);
      setWindSpeed(data.wind.speed);
      setmaxTemp(data.main.temp_max);
      setminTemp(data.main.temp_min);
      setWeatherType(data.weather[0].description);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  const handleSearch = () => {
    if (searchInputText.trim()!==""){
      apiReq(searchInputText)
    }
  };


  // useEffect(()=>{
  //   if (searchInputText.trim()!== ""){
  //     apiReq(searchInputText)
  //   }
  // },[searchInputText])

  
  
  return (
     <div className='w-full h-screen flex justify-center items-center bg-[url("https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Weather-Background.jpg")] bg-center bg-cover'>
      <div className='bg-white p-6 rounded-md shadow-lg'>
        <h1 className='text-3xl font-bold mb-6'>Weather Application</h1>
        <div className='flex items-center mb-4'>
          <input type="text" placeholder='Enter Your City Name...' value={searchInputText} onChange={(ev) => setSearchInputText(ev.target.value)} className='p-2 outline-none border-2 flex-grow mr-2' />
          <button type="submit" onClick={handleSearch} className='bg-black py-2 px-4 text-white rounded-sm'>Search</button>
        </div>
        {weatherData && (
          <div>
            <h2 className='text-xl font-semibold mb-2'>Weather Information</h2>
            <div className='grid grid-cols-2 gap-4'>
              <p><strong>City Name:</strong> {city_name}</p>
              <p><strong>Weather Type:</strong> {weather_type}</p>
              <p><strong>Max Temp:</strong> {maxtemp} K</p>
              <p><strong>Min Temp:</strong> {mintemp} K</p>
              <p><strong>Wind Speed:</strong> {windspeed} km/h</p>
              <p><strong>Humidity:</strong> {humidity}%</p>
              <p><strong>Feels Like:</strong> {feelsLike} K</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App