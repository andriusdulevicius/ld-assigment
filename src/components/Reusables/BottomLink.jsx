import React from 'react';
import { ArrowRight } from '../../assets/icons/ArrowRight';
import { Typography, Link, Box } from '@mui/material';

const BottomLink = ({ linkColor, linkText, linkTo }) => {
  return (
    <Link color={linkColor} to={linkTo}>
      <Box display='flex' alignItems='center' flexWrap='nowrap' gap='0.3rem'>
        <Typography>{linkText}</Typography>
        <ArrowRight />
      </Box>
    </Link>
  );
};

export default BottomLink;
