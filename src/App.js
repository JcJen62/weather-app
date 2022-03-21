import './App.css';
import React, { useState, useEffect } from 'react';
import { TextField } from "@mui/material"
import Typeography from "@mui/material/Typography"
import Weather from './Weather.js'
import Button from '@mui/material/Button';

function App() {
  const [weather, setWeather] = useState([])
  const [location, setLocation] = useState([])
  const [isCelcius, setIsCelcius] = useState(false)
  const [searchTerms, setUserInput] = React.useState("Orem")

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  useEffect(() => {
    async function getWeather() {
      try{
        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8db9fde1113d427ca65191701222003&q=${searchTerms}&days=3&aqi=no&alerts=no
      `)
      const data = await res.json()

      setWeather(data?.forecast.forecastday)
      console.log(data.forecast.forecastday.length)
      setLocation(data.location)
      } catch (err){
        console.log(err)
      }
    }

    getWeather()
  }, [searchTerms])

  return (
    <div className="App">
      <Typeography variant="h2" >Your Location: {location?.name}</Typeography>
      <div id='search'>
          <TextField
            size="medium"
            label="Search By Zip Code or City Name"
            variant="outlined"
            onChange={handleChange}
            value={searchTerms}
            sx={{ backgroundColor: 'white', borderRadius: '5px' }}
          />
      </div>
      <Button variant="contained" sx={{backgroundColor: '#446680'}} onClick={() => setIsCelcius(!isCelcius)}>Swap Degree Measurment</Button>
      {weather?.map(elm => (
        <Weather key={elm.date_epoch} weatherObj={elm} isCelcius={isCelcius} />
      ))}
    </div>
  );
}

export default App;
