import React, { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import Image from 'mui-image';
import BottomLink from '../Reusables/BottomLink';
import appStore from '../../assets/images/appStore.png';
import googlePlay from '../../assets/images/googlePlay.png';
import device from '../../assets/images/Device.png';
import { white } from '../../styles/colors';
import { Theme } from '../../styles/theme';

const MobileAdvert: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.main}>
        <Box className={classes.text}>
          <Typography variant='h6'>Sell your products on your exclusive APP published on the stores</Typography>
          <BottomLink color={white} text='Show more' href='https://applestore.com' />
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
    </>
  );
};

export default MobileAdvert;

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
    gap: '1rem',
    height: '80%',
  },
  text: {
    maxWidth: '50%',
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
