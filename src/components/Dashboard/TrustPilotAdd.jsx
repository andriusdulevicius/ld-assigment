import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Image } from 'mui-image';
import trustPilotLogo from '../../assets/images/logo-white-trustpilot.png';
import { withFooter } from '../Hoc';

const TrustPilotAdd = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.content}>
        <Box className={classes.image}>
          <Image src={trustPilotLogo} />
        </Box>
        <Typography variant='h6' className={classes.text}>
          Show us your love by leaving a
          <Typography variant='h6' component='span' className={classes.success}>
            {' positive '}
          </Typography>
          review on trust pilot and receive the extension of
          <Typography variant='h6' component='span' className={classes.bolded}>
            {' 50 additional products'}
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default withFooter(TrustPilotAdd);

const useStyles = makeStyles((theme) => ({
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
  bolded: {
    fontWeight: 600,
  },
}));
