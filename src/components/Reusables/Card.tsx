import React, { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';

interface Props {
  children: JSX.Element;
  backgroundColor?: string;
}

const Card: FC<Props> = ({ children, backgroundColor }) => {
  const classes = useStyles({ backgroundColor: backgroundColor || 'inherit' });

  return <Paper className={classes.wrapper}>{children}</Paper>;
};

export default Card;

const useStyles = makeStyles({
  wrapper: {
    padding: '0.625rem',
    minHeight: '13rem',
    height: '100%',
    width: '100%',
    borderRadius: '0.625rem',
    boxShadow: '0 4px 8px 0 rgba(50, 50, 71, 0.08)',
    backgroundColor: ({ backgroundColor }: { backgroundColor: string }) => backgroundColor,
  },
});
