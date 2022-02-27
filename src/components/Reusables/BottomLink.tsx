import React, { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { ArrowRight } from '../../assets/icons/ArrowRight';
import { Typography, Link, Box } from '@mui/material';

interface Props {
  text: string;
  color: string;
  link: string;
}

const BottomLink: FC<Props> = ({ text, ...rest }) => {
  const classes = useStyles();

  return (
    <Link {...rest}>
      <Box className={classes.wrapper}>
        <Typography>{text}</Typography>
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
