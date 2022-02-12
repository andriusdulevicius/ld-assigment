import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import fetchData from '../../utils/fetchData';

const WeatherCard = () => {
  const [weatherObj, setWeatherObj] = useState('');
  const [cityName, setCityName] = useState('London');

  useEffect(() => {
    fetchWeather(cityName);
  }, [cityName]);

  async function fetchWeather(city) {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
    const data = await fetchData(weatherApi);
    setWeatherObj(data);
  }

  function fetchNewData(e) {
    e.preventDefault();
    setCityName(e.target.cityName.value);
    fetchWeather(cityName);
  }

  return (
    <>
      <Box textAlign='center'>
        <form onSubmit={fetchNewData}>
          <TextField
            id='filled-search'
            label='Enter city name'
            type='search'
            variant='outlined'
            name='cityName'
            size='small'
          />
        </form>
      </Box>
      <Box>
        <Typography variant='h5' textAlign='center'>
          {cityName} forecast
        </Typography>
        {weatherObj.main ? (
          <Box textAlign='center'>
            <Typography>Current temp: {Math.round(weatherObj.main.temp)}C</Typography>

            <Typography>Feels like: {Math.round(weatherObj.main.feels_like)}C</Typography>
            <img src={`http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`} alt='weather icon' />
            <Typography>{weatherObj.weather[0].description}</Typography>
          </Box>
        ) : (
          <Typography textAlign='center'>Please enter a valid city name to see the forecast</Typography>
        )}
        {weatherObj.message && (
          <Typography variant='subtitle2' color='red' textAlign='center'>
            {weatherObj.message}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default WeatherCard;
