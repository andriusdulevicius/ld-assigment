import React, { useState, FC } from 'react';
import { Button, Grid, Box, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useGlobalState } from '../context';
import { BurgerMenu, ExternalLink, Zap } from '../assets/icons';
import Sidebar from './Sidebar/Sidebar';
import { Theme } from '../styles/theme';

interface Props {
  page: string;
}

const Header: FC<Props> = ({ page }) => {
  const classes = useStyles();
  const [menuVisible, setMenuVisible] = useState(false);
  const [state, setState] = useGlobalState();

  const toggleMenu = (open: boolean) => {
    setState({ ...state, menuCollapsed: false });
    setMenuVisible(!!open);
  };

  return (
    <>
      <Grid container className={classes.container}>
        {menuVisible && (
          <Box sx={{ display: { sm: 'block', md: 'none' } }} className={classes.sidebar}>
            <Sidebar mobile={true} customAction={() => toggleMenu(false)} />
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
          <Link href='/'>
            <Box className={classes.whatsNewBox}>
              <Zap />
              <Typography>Whats new</Typography>
              <Box className={classes.notification}>2</Box>
            </Box>
          </Link>
        </Grid>
      </Grid>
      <Box className={classes.hero}>
        <Typography variant='h4' component='div'>
          Welcome, Andrius!
        </Typography>
        <Link href='app.vetrinalive.it/fenoh-store' sx={{ display: { xs: 'none', md: 'block' } }}>
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

const useStyles = makeStyles((theme: Theme) => ({
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
    color: theme.palette.primary.main,
  },
  hero: {
    background: `linear-gradient(180deg, ${theme.palette.secondary.main} 0%, rgba(33, 184, 249, 0) 132%)`,
    width: '100%',
    height: '10rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2.5rem 1rem 3rem 1rem',
    margin: '0',
    color: theme.palette.white.main,
    '& .MuiLink-root': {
      color: theme.palette.white.main,
      textDecoration: 'none',
      '& :hover': {
        color: theme.palette.darkGray.main,
      },
    },
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
  heroLinkBox: {
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
  },
  heroLinkText: {
    fontSize: '1rem',
  },
}));
