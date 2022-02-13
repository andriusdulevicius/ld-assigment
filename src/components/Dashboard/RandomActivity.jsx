import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import fetchData from '../../utils/fetchData';
import { darkBlue } from '../../styles/colors';
import PrimaryButton from '../Reusables/PrimaryButton';

const RandomActivity = () => {
  const [randomActivity, setRandomActivity] = useState('');
  const randomActivityApi = 'https://www.boredapi.com/api/activity';

  useEffect(() => {
    getNewActivity();
  }, []);

  async function getNewActivity() {
    const data = await fetchData(randomActivityApi);
    setRandomActivity(data.activity);
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='1rem'
      justifyContent='center'
      alignItems='center'
      padding='auto 1rem'
    >
      <Typography textAlign='center' variant='h5' component='p' color={darkBlue}>
        {randomActivity}
      </Typography>
      <PrimaryButton onClick={getNewActivity}>Generate new activity</PrimaryButton>
    </Box>
  );
};

export default RandomActivity;
