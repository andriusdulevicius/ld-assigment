import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Link, Typography } from '@mui/material';
import { ExternalLink } from '../../assets/icons/ExternalLink';

export const withHeader = (Component) => {
  const NewComponent = (props) => {
    const { title, Icon, link } = props;
    const classes = useStyles();
    return (
      <>
        <Box className={classes.headerWrapper}>
          <Box className={classes.header}>
            <Icon />
            <Typography variant='subtitle1' className={classes.title}>
              {title}
            </Typography>
          </Box>
          {link && (
            <Typography variant='subtitle1' component='span'>
              <Link to={link} className={classes.link}>
                Visit our blog <ExternalLink />
              </Link>
            </Typography>
          )}
        </Box>
        <Component {...props} />
      </>
    );
  };
  return NewComponent;
};

const useStyles = makeStyles((theme) => ({
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
    color: theme.palette.secondary.main,
  },
}));
