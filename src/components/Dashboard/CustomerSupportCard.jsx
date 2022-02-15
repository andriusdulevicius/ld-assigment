import React from 'react';
import { makeStyles } from '@mui/styles';
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

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    gap: '1rem',
  },
  specialist: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
  },
  image: {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '4rem',
    height: '4rem',
  },
});

const CustomerSupportCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      {specialists.map((spec) => (
        <Box key={spec.name} className={classes.specialist}>
          <Box className={classes.image}>
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
