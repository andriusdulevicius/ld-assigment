import React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, Box, Typography } from '@mui/material';
import Image from 'mui-image';
import BottomLink from '../Reusables/BottomLink';
import appStore from '../../assets/images/appStore.png';
import googlePlay from '../../assets/images/googlePlay.png';
import device from '../../assets/images/Device.png';

const MobileAdvert = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <Box className={classes.main}>
        <Box className={classes.text}>
          <Typography variant='h6'>Sell your products on your exclusive APP published on the stores</Typography>
          <BottomLink linkColor='#FFF' linkText='Show more' linkTo='#' />
        </Box>
        <Box className={classes.image}>
          <Image src={device} alt='deviceImage' />
        </Box>
      </Box>
      <Box className={classes.cta}>
        <Box>
          <Image src={appStore} alt='appStore' />
        </Box>
        <Box>
          <Image src={googlePlay} alt='googlePlay' />
        </Box>
      </Box>
    </Paper>
  );
};

export default MobileAdvert;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '1rem',
    backgroundColor: theme.palette.orange.main,
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    height: '80%',
  },
  text: {
    maxWidth: '60%',
    color: theme.palette.white.main,
  },
  image: {
    maxHeight: '15rem',
  },
  cta: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    height: '2rem',
    margin: '0.5rem',
  },
}));
