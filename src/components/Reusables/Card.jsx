import React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, Box, Link, Typography } from '@mui/material';
import { ExternalLink } from '../../assets/icons/ExternalLink';
import BottomLink from './BottomLink';

const Card = ({ children, title, blogLink, icon, bottomLinkText, bottomLinkColor, linkTo }) => {
  const classes = useStyles();

  return (
    <Paper rounded='true' className={classes.wrapper}>
      <Box className={classes.headerWrapper}>
        <Box className={classes.header}>
          {icon}
          <Typography variant='subtitle1' className={classes.title}>
            {title}
          </Typography>
        </Box>
        {blogLink && (
          <Typography variant='subtitle1' component='span'>
            <Link to={blogLink} className={classes.link}>
              Visit our blog <ExternalLink />
            </Link>
          </Typography>
        )}
      </Box>
      {children}
      {bottomLinkText && (
        <Box className={classes.bottomLink}>
          <BottomLink linkText={bottomLinkText} linkColor={bottomLinkColor} linkTo={linkTo} />
        </Box>
      )}
    </Paper>
  );
};

export default Card;

const useStyles = makeStyles({
  wrapper: {
    minHeight: '13rem',
    width: '100%',
    flexWrap: 'nowrap',
    gap: '.3rem',
  },
  headerWrapper: {
    display: 'flex',
    padding: '.8rem',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    gap: '0.5rem',
  },
  title: {
    paddingLeft: '0.2rem',
  },
  link: {
    cursor: 'pointer',
  },
  bottomLink: {
    padding: '1rem',
  },
});
