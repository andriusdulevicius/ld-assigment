import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import Image from 'mui-image';
import BottomLink from '../Reusables/BottomLink';
import { orange } from '../../styles/colors';
import appStore from '../../assets/images/appStore.png';
import googlePlay from '../../assets/images/googlePlay.png';
import device from '../../assets/images/Device.png';

const MobileAdvert = () => {
  return (
    <Paper sx={{ padding: '1rem', backgroundColor: orange }}>
      <Box display='flex' justifyContent='space-between' gap='1rem' height='80%'>
        <Box maxWidth='60%'>
          <Typography variant='h6' color='#FFF'>
            Sell your products on your exclusive APP published on the stores
          </Typography>
          <BottomLink linkColor='#FFF' linkText='Show more' linkTo='#' />
        </Box>
        <Box maxHeight='15rem'>
          <Image src={device} alt='deviceImage' />
        </Box>
      </Box>
      <Box display='flex' gap='2rem' justifyContent='center' height='2rem' margin='0.5rem'>
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
