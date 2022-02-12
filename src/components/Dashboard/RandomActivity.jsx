import React, { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import fetchData from '../../utils/fetchData';

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
      <Typography textAlign='center' variant='h5' component='p' color='main'>
        {randomActivity}
      </Typography>
      <Button size='small' variant='contained' onClick={getNewActivity}>
        Generate new activity
      </Button>
    </Box>
  );
};

export default RandomActivity;
