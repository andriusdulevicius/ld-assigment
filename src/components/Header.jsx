import React, { useState } from 'react';
import { Button, Grid, Box, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useGlobalState } from '../context';
import { BurgerMenu, ExternalLink, Zap } from '../assets/icons';
import Sidebar from './Sidebar/Sidebar';

const Header = ({ page }) => {
  const classes = useStyles();
  const [menuVisible, setMenuVisible] = useState(false);
  const [state, setState] = useGlobalState();

  const toggleMenu = (open) => {
    setState({ ...state, menuCollapsed: false });
    setMenuVisible(!!open);
  };

  return (
    <>
      <Grid container className={classes.container}>
        {menuVisible && (
          <Box sx={{ display: { sm: 'block', md: 'none' } }} className={classes.sidebar}>
            <Sidebar mobile={true} customAction={toggleMenu} />
          </Box>
        )}
        <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
          <Button onClick={() => toggleMenu(true)} color='secondary' sx={{ minWidth: 0 }}>
            <BurgerMenu color='primary' />
          </Button>
        </Grid>
        <Grid item className={classes.pageName}>
          {page}
        </Grid>
        <Grid item>
          <Box className={classes.whatsNewBox}>
            <Zap />
            <Typography>Whats new</Typography>
            <Box className={classes.notification}>2</Box>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.hero}>
        <Typography variant='h4' component='div'>
          Welcome, Andrius!
        </Typography>
        <Link
          className={classes.heroLink}
          to='app.vetrinalive.it/fenoh-store'
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          <Box className={classes.heroLinkBox}>
            <Typography className={classes.heroLinkText}>app.vetrinalive.it/fenoh-store</Typography>
            <ExternalLink />
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    height: '4rem',
    borderBottom: '1px solid grey',
  },
  pageName: {
    textTransform: 'capitalize',
    fontWeight: 600,
    color: theme.palette.primary.dark,
  },
  hero: {
    background: `linear-gradient(0deg, ${theme.palette.white.main} 0%, ${theme.palette.secondary.main} 100%)`,
    width: '100%',
    height: '10rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2.5rem 1rem 3rem 1rem',
    margin: '0',
    color: theme.palette.white.main,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 'auto',
    minHeight: '100vh',
    backgroundColor: theme.palette.white.main,
    zIndex: '99',
  },
  whatsNewBox: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  notification: {
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',
    width: '1.2rem',
    height: '1.2rem',
    borderRadius: '50%',
    backgroundColor: theme.palette.danger.main,
    color: theme.palette.white.main,
    fontSize: '0.8rem',
    textAlign: 'center',
  },
  heroLink: {
    color: 'inherit',
  },
  heroLinkBox: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.white.main,
  },
  heroLinkText: {
    fontSize: '1.3rem',
  },
}));
