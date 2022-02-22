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
    margin: '0 auto',
    padding: '0.625rem',
    minHeight: '13rem',
    width: '100%',
    flexWrap: 'nowrap',
    gap: '.3rem',
    borderRadius: '0.625rem',
    boxShadow: '0 4px 8px 0 rgba(50, 50, 71, 0.08)',
  },
  headerWrapper: {
    display: 'flex',
    padding: '.5rem',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    color: theme.palette.primary.main,
  },
  title: {
    paddingLeft: '0.2rem',
    fontWeight: 500,

    fontSize: '1.25rem',
  },
  link: {
    cursor: 'pointer',
  },
}));
