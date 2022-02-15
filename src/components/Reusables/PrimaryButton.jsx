import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const PrimaryButton = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <Button color='secondary' onClick={onClick} variant='contained' size='small' className={classes.primaryButton}>
      {children}
    </Button>
  );
};

export default PrimaryButton;

const useStyles = makeStyles((theme) => ({
  primaryButton: {
    color: theme.palette.white.main,
    backgroundColor: theme.palette.secondary.main,
  },
}));
