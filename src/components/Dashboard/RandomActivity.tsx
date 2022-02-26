import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Box } from '@mui/material';
import fetchData from '../../utils/fetchData';
import endpoints from '../../utils/apiEndpoints';
import PrimaryButton from '../Reusables/PrimaryButton';
import { withHeader } from '../Hoc';
import { Theme } from '../../styles/theme';

const RandomActivity: React.FC = () => {
  const classes = useStyles();
  const [randomActivity, setRandomActivity] = useState<string>('');
  const { getRandomActivity } = endpoints;

  const getNewActivity = async () => {
    const data = await fetchData(getRandomActivity);
    setRandomActivity(data.activity);
  };

  useEffect(() => {
    getNewActivity();
  }, []);

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.text} variant='h5' component='p'>
        {randomActivity}
      </Typography>
      <PrimaryButton onClick={getNewActivity}>Generate new activity</PrimaryButton>
    </Box>
  );
};

export default withHeader(RandomActivity);

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.4rem 0',
  },
  text: {
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
}));
