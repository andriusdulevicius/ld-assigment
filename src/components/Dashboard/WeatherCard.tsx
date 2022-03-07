import { useState, useEffect, FC } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import fetchData from '../../utils/fetchData';
import endpoints from '../../utils/apiEndpoints';
import { withHeader } from '../Hoc';

interface WeatherData {
  main?: {
    temp: number;
    feels_like: number;
  };
  name?: string;
  weather?: [{ icon: string; description: string }];
  message?: string;
}

const WeatherCard: FC = () => {
  const classes = useStyles();
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [cityName, setCityName] = useState<string>('London');
  const { main, weather, name } = weatherData;
  const { getWeather } = endpoints;

  useEffect(() => {
    fetchData(getWeather(cityName)).then((data) => {
      if (data.error) {
        setWeatherData({});
        return;
      } else setWeatherData(data);
    });
  }, [cityName]);

  const setCity = (e: any) => {
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
        {main ? (
          <>
            <Typography variant='h5' className={classes.alignment}>
              {name} forecast
            </Typography>

            <Box className={classes.alignment}>
              <Typography>Current temp: {Math.round(main.temp)}C</Typography>

              <Typography>Feels like: {Math.round(main.feels_like)}C</Typography>
              <img src={`http://openweathermap.org/img/wn/${weather?.[0].icon}@2x.png`} alt='weather icon' />
              <Typography>{weather?.[0].description}</Typography>
            </Box>
          </>
        ) : (
          <Typography className={classes.alignment}>Please enter a valid city name to see the forecast</Typography>
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
