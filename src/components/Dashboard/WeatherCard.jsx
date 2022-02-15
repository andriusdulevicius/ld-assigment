import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import fetchData from '../../utils/fetchData';

const WeatherCard = () => {
  const classes = useStyles();
  const [weatherObj, setWeatherObj] = useState('');
  const [cityName, setCityName] = useState('London');

  useEffect(() => {
    fetchWeather(cityName);
  }, [cityName]);

  const fetchWeather = async (city) => {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
    const data = await fetchData(weatherApi);
    setWeatherObj(data);
  };

  const fetchNewData = (e) => {
    e.preventDefault();
    setCityName(e.target.cityName.value);
    fetchWeather(cityName);
  };

  return (
    <>
      <Box className={classes.alignment}>
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
        <Typography variant='h5' className={classes.alignment}>
          {cityName} forecast
        </Typography>
        {weatherObj.main ? (
          <Box className={classes.alignment}>
            <Typography>Current temp: {Math.round(weatherObj.main.temp)}C</Typography>

            <Typography>Feels like: {Math.round(weatherObj.main.feels_like)}C</Typography>
            <img src={`http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`} alt='weather icon' />
            <Typography>{weatherObj.weather[0].description}</Typography>
          </Box>
        ) : (
          <Typography className={classes.alignment}>Please enter a valid city name to see the forecast</Typography>
        )}
        {weatherObj.message && (
          <Typography variant='subtitle2' className={classes.alignment}>
            {weatherObj.message}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default WeatherCard;

const useStyles = makeStyles({
  alignment: {
    textAlign: 'center',
  },
});
