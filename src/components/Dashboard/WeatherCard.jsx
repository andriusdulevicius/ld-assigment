import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import fetchData from '../../utils/fetchData';
import endpoints from '../../utils/apiEndpoints';
import { withHeader } from '../Hoc';

const WeatherCard = () => {
  const classes = useStyles();
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState('London');
  const { main, weather, message } = weatherData;
  const { getWeather } = endpoints;

  useEffect(() => {
    fetchData(getWeather(cityName)).then((data) => setWeatherData(data || {}));
  }, [cityName]);

  const setCity = (e) => {
    e.preventDefault();
    setCityName(e.target.cityName?.value || e.target.value);
  };

  return (
    <Box>
      <Box className={classes.inputField}>
        <form onSubmit={setCity} onBlur={setCity}>
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
      <Box className={classes.results}>
        <Typography variant='h5' className={classes.alignment}>
          {cityName} forecast
        </Typography>
        {main ? (
          <Box className={classes.alignment}>
            <Typography>Current temp: {Math.round(main.temp)}C</Typography>

            <Typography>Feels like: {Math.round(main.feels_like)}C</Typography>
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='weather icon' />
            <Typography>{weather[0].description}</Typography>
          </Box>
        ) : (
          <Typography className={classes.alignment}>Please enter a valid city name to see the forecast</Typography>
        )}
        {message && (
          <Typography variant='subtitle2' className={classes.alignment}>
            {message}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default withHeader(WeatherCard);

const useStyles = makeStyles({
  inputField: {
    margin: '0 auto',
    maxWidth: '10rem',
  },
  results: {
    padding: '0.5rem 0',
  },
  alignment: {
    textAlign: 'center',
  },
});
