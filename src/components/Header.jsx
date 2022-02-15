import React, { useEffect, useState } from 'react';
import { Button, Grid, Box, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useGlobalState } from '../context';
import { BurgerMenu, ExternalLink, Zap } from '../assets/icons';
import { danger } from '../styles/colors';
import Sidebar from './Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '50px',
    alignItems: 'center',
    borderBottom: '1px solid grey',
  },
  pageName: {
    textTransform: 'capitalize',
  },
  hero: {
    background: `linear-gradient(0deg, #fff 0%, ${theme.palette.secondary.main} 100%)`,
    width: '100%',
    height: '10rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2.5rem 1rem 3rem 1rem',
    margin: '0',
    color: '#FFF',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 'auto',
    minHeight: '100vh',
    backgroundColor: '#fff',
    zIndex: '99',
  },
}));

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
      <Grid container justifyContent='space-between' height='3rem' px='1rem' className={classes.container}>
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
          <Box display='flex' alignItems='center' position='relative'>
            <Zap />
            <Typography>Whats new</Typography>
            <Box
              position='absolute'
              top='-0.5rem'
              right='-0.5rem'
              width='1.2rem'
              height='1.2rem'
              borderRadius='50%'
              backgroundColor={danger}
              color='#FFF'
              fontSize='0.8rem'
              textAlign='center'
            >
              2
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.hero}>
        <Typography variant='h4' component='div'>
          Welcome, Andrius!
        </Typography>
        <Link color='inherit' to='app.vetrinalive.it/fenoh-store'>
          <Box display='flex' alignItems='center' color='#FFF'>
            <Typography fontSize='1.3rem'>app.vetrinalive.it/fenoh-store</Typography>
            <ExternalLink />
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Header;
