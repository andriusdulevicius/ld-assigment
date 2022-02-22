import React from 'react';
import { makeStyles } from '@mui/styles';
import BottomLink from '../Reusables/BottomLink';
import { Box } from '@mui/material';

export const withFooter = (Component) => {
  const NewComponent = (props) => {
    const { footerText, footerColor, footerLink } = props;
    const classes = useStyles();
    return (
      <>
        <Component {...props} />
        {footerText && (
          <Box className={classes.bottomLink}>
            <BottomLink linkText={footerText} linkColor={footerColor} linkTo={footerLink} />
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
