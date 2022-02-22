import React from 'react';
import { makeStyles } from '@mui/styles';
import BottomLink from '../Reusables/BottomLink';
import { Box } from '@mui/material';

export const withFooter = (Component) => {
  const NewComponent = (props) => {
    const { footerLink } = props;
    console.log('footerLink', { ...footerLink });
    const classes = useStyles();

    return (
      <>
        <Component {...props} />
        {footerLink?.text && (
          <Box className={classes.bottomLink}>
            <BottomLink {...footerLink} />
          </Box>
        )}
      </>
    );
  };
  return NewComponent;
};

const useStyles = makeStyles((theme) => ({
  bottomLink: {
    padding: '1rem',
  },
}));
