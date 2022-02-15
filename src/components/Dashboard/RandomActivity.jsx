import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Box } from '@mui/material';
import fetchData from '../../utils/fetchData';
import PrimaryButton from '../Reusables/PrimaryButton';

const RandomActivity = () => {
  const classes = useStyles();
  const [randomActivity, setRandomActivity] = useState('');
  const randomActivityApi = 'https://www.boredapi.com/api/activity';

  useEffect(() => {
    getNewActivity();
  }, []);

  const getNewActivity = async () => {
    const data = await fetchData(randomActivityApi);
    setRandomActivity(data.activity);
  };

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.text} variant='h5' component='p'>
        {randomActivity}
      </Typography>
      <PrimaryButton onClick={getNewActivity}>Generate new activity</PrimaryButton>
    </Box>
  );
};

export default RandomActivity;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 'auto 1rem',
  },
  text: {
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
}));
