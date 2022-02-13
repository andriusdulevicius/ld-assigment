import React from 'react';
import { Button, Grid, Box, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useGlobalState } from '../context';
import { BurgerMenu, ExternalLink, Zap } from '../assets/icons';
import { danger, secondary } from '../styles/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '50px',
    alignItems: 'center',
    borderBottom: '1px solid grey',
  },
  pageName: {
    textTransform: 'capitalize',
  },
}));

const Header = ({ page }) => {
  const classes = useStyles();
  const [state, setState] = useGlobalState();
  const { menuCollapsed } = state;

  return (
    <>
      <Grid container justifyContent='space-between' height='3rem' px='2rem' className={classes.container}>
        <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
          <Button
            onClick={() => setState({ ...state, menuCollapsed: !menuCollapsed })}
            color='secondary'
            sx={{ minWidth: 0 }}
          >
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
      <Box
        width='100%'
        backgroundColor={secondary}
        height='10rem'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        padding='2.5rem 1rem 3rem 1rem'
        margin='0'
        color='#FFF'
      >
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
