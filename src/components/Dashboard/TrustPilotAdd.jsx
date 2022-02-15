import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Paper } from '@mui/material';
import { Image } from 'mui-image';
import BottomLink from '../Reusables/BottomLink';
import trustPilotLogo from '../../assets/images/logo-white-trustpilot.png';
import { success } from '../../styles/colors';

const TrustPilotAdd = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <Box className={classes.content}>
        <Box className={classes.image}>
          <Image src={trustPilotLogo} />
        </Box>
        <Typography variant='h6' className={classes.text}>
          Show us your love by leaving a
          <Typography variant='h6' component='span' className={classes.success}>
            {' positive '}
          </Typography>
          review on trust pilot and receive the extension of 50 additional products
        </Typography>
        <BottomLink linkText='Write a review on Trustpilot' linkColor={success} linkTo='https://www.trustpilot.com/' />
      </Box>
    </Paper>
  );
};

export default TrustPilotAdd;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '13rem',
    width: '100%',
    backgroundColor: theme.palette.trustPilotBlue.main,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '.8rem',
  },
  image: {
    maxWidth: '8rem',
    width: '70%',
  },
  text: {
    color: theme.palette.white.main,
    margin: '1.2rem 0',
  },
  success: {
    color: theme.palette.success.main,
  },
}));
