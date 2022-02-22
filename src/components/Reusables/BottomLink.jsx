import React from 'react';
import { makeStyles } from '@mui/styles';
import { ArrowRight } from '../../assets/icons/ArrowRight';
import { Typography, Link, Box } from '@mui/material';

const BottomLink = ({ linkColor, linkText, linkTo }) => {
  const classes = useStyles();

  return (
    <Link color={linkColor} href={linkTo} target='_blank'>
      <Box className={classes.wrapper}>
        <Typography>{linkText}</Typography>
        <ArrowRight />
      </Box>
    </Link>
  );
};

export default BottomLink;

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '.3rem',
    cursor: 'pointer',
  },
});
