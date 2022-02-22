import React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';

const Card = ({ children, backgroundColor }) => {
  const classes = useStyles();

  return (
    <Paper rounded='true' className={classes.wrapper} sx={{ backgroundColor: backgroundColor }}>
      {children}
    </Paper>
  );
};

export default Card;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '0.625rem',
    minHeight: '13rem',
    height: '100%',
    width: '100%',
    borderRadius: '0.625rem',
    boxShadow: '0 4px 8px 0 rgba(50, 50, 71, 0.08)',
  },
}));
