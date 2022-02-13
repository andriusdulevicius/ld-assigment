import React from 'react';
import { Box, Typography } from '@mui/material/';
import { orange, success } from '../../styles/colors';
import LanguageIcon from '@mui/icons-material/Language';

const ExtensionsCard = () => {
  return (
    <Box display='flex' flexWrap='nowrap' overflow='hidden' gap='2rem'>
      <Box width='10rem' padding='1rem'>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          backgroundColor={orange}
          color='#FFF'
          width='9rem'
          height='9rem'
          fontSize='3rem'
          borderRadius='0.5rem'
        >
          <LanguageIcon fontSize='inherit' />
        </Box>
        <Box>
          <Typography gutterBottom variant='subtitle2' component='div'>
            Connect your own domain
          </Typography>
        </Box>
      </Box>
      <Box width='10rem' padding='1rem'>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          backgroundColor={success}
          color='#FFF'
          width='9rem'
          height='9rem'
          fontSize='3rem'
          borderRadius='0.5rem'
        >
          <Typography fontSize='1.5rem' fontWeight={600} textAlign='center'>
            +50
          </Typography>
          <Typography component='span' textAlign='center'>
            prodotti
          </Typography>
        </Box>
        <Box>
          <Typography gutterBottom variant='subtitle2' component='div'>
            50 additional products
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ExtensionsCard;
