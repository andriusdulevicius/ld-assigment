import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  primaryButton: {
    color: '#FFF',
    backgroundColor: theme.palette.secondary.main,
  },
}));

const PrimaryButton = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <Button color='secondary' onClick={onClick} variant='contained' size='small' className={classes.primaryButton}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
