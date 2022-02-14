import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Image } from 'mui-image';
import BottomLink from '../Reusables/BottomLink';
import trustPilotLogo from '../../assets/images/logo-white-trustpilot.png';
import { success, trustPilotBlue } from '../../styles/colors';

const TrustPilotAdd = () => {
  return (
    <Paper sx={{ minHeight: '13rem', width: '100%', backgroundColor: trustPilotBlue }}>
      <Box display='flex' flexDirection='column' padding='0.8rem'>
        <Box maxWidth='8rem' width='70%'>
          <Image src={trustPilotLogo} />
        </Box>
        <Typography variant='h6' color='#FFF' margin='1.2rem 0'>
          Show us your love by leaving a
          <Typography variant='h6' component='span' color={success}>
            positive
          </Typography>
          review on trust pilot and receive the extension of 50 additional products
        </Typography>
        <BottomLink linkText='Write a review on Trustpilot' linkColor={success} linkTo='https://www.trustpilot.com/' />
      </Box>
    </Paper>
  );
};

export default TrustPilotAdd;
