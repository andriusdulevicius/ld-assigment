import React from 'react';
import { Box, Typography } from '@mui/material';
import { Image } from 'mui-image';
import andriusPhoto from '../../assets/images/img.jpg';
import simonePhoto from '../../assets/images/simone.jpg';
import PrimaryButton from '../Reusables/PrimaryButton';
import { Navigate } from 'react-router-dom';

const specialists = [
  { name: 'Andrius', photo: andriusPhoto },
  { name: 'Simone', photo: simonePhoto },
];

const CustomerSupportCard = () => {
  return (
    <Box display='flex' flexDirection='column' gap='1rem' padding='1rem'>
      {specialists.map((spec) => (
        <Box key={spec.name} display='flex' gap='1.2rem' alignItems='center'>
          <Box borderRadius='50%' overflow='hidden' width='4rem' height='4rem'>
            <Image src={spec.photo} />
          </Box>
          <Typography> {spec.name} is here to help you</Typography>
        </Box>
      ))}
      <PrimaryButton onClick={() => Navigate('/page/contacts')}>Contact us</PrimaryButton>
    </Box>
  );
};

export default CustomerSupportCard;
