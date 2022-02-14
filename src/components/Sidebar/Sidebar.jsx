import React from 'react';
import { makeStyles } from '@mui/styles';
import { useGlobalState } from '../../context';
import { Button, Grid, Box } from '@mui/material';
import ShopSelection from './ShopSelection.jsx';
import logo from '../../assets/images/logo.png';
import { BurgerMenu } from '../../assets/icons/BurgerMenu';
import Menu from './Menu';

const useStyles = makeStyles({
  image: {
    objectFit: 'contain',
  },
});

const Sidebar = () => {
  const classes = useStyles();
  const [state, setState] = useGlobalState();
  const { menuCollapsed } = state;

  return (
    <Grid
      item
      md={menuCollapsed ? 0.5 : 3}
      sx={{ display: { xs: 'none', md: 'block' }, borderRight: '1px solid grey', minWidth: '3.5rem' }}
      height='100%'
    >
      <Box display='flex' justifyContent={menuCollapsed ? 'start' : 'space-between'} py='.5rem' px='.7rem'>
        {!menuCollapsed && <img src={logo} alt='Logo' className={classes.image} />}
        <Button
          onClick={() => setState({ ...state, menuCollapsed: !menuCollapsed })}
          color='secondary'
          sx={{ minWidth: 0 }}
        >
          <BurgerMenu color='primary' />
        </Button>
      </Box>
      <Menu />
      {!menuCollapsed && <ShopSelection />}
    </Grid>
  );
};

export default Sidebar;
