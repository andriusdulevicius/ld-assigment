import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const PrimaryButton = ({ children, onClick, ...rest }) => {
  const classes = useStyles();
  return (
    <Button onClick={onClick} variant='contained' size='small' className={classes.primaryButton} {...rest}>
      {children}
    </Button>
  );
};

export default PrimaryButton;

const useStyles = makeStyles((theme) => ({
  primaryButton: {
    color: theme.palette.white.main,
    backgroundColor: theme.palette.secondary.main,
    padding: '0.6rem',
    textTransform: 'none',
  },
}));
