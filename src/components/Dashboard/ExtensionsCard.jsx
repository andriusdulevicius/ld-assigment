import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material/';
import LanguageIcon from '@mui/icons-material/Language';
import { withHeader, withFooter } from '../Hoc';

const ExtensionsCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.extensionWrapper}>
        <Box className={`${classes.extension} ${classes.orange}`}>
          <LanguageIcon fontSize='inherit' />
        </Box>
        <Box>
          <Typography gutterBottom variant='subtitle2' component='div'>
            Connect your own domain
          </Typography>
        </Box>
      </Box>
      <Box className={classes.extensionWrapper}>
        <Box className={`${classes.extension} ${classes.success}`}>
          <Typography className={classes.text}>+50</Typography>
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

export default withFooter(withHeader(ExtensionsCard));

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    overflow: 'hidden',
    flexWrap: 'nowrap',
    gap: '.2rem',
  },
  extensionWrapper: {
    width: '10rem',
    padding: '1rem',
  },
  extension: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.white.main,
    width: '9rem',
    height: '9rem',
    fontSize: '3rem',
    borderRadius: '.5rem',
  },
  orange: {
    backgroundColor: theme.palette.orange.main,
  },
  success: {
    backgroundColor: theme.palette.success.main,
  },
  text: {
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: 600,
  },
}));
