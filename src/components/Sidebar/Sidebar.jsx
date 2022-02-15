import React from 'react';
import { makeStyles } from '@mui/styles';
import { useGlobalState } from '../../context';
import { Button, Grid, Box } from '@mui/material';
import ShopSelection from './ShopSelection.jsx';
import logo from '../../assets/images/logo.png';
import { BurgerMenu } from '../../assets/icons/BurgerMenu';
import Menu from './Menu';

const Sidebar = ({ mobile, customAction }) => {
  const classes = useStyles();
  const [state, setState] = useGlobalState();
  const { menuCollapsed } = state;

  const toggleMenu = () => {
    if (customAction) {
      customAction();
      setState({ ...state, menuCollapsed: false });
    } else setState({ ...state, menuCollapsed: !menuCollapsed });
  };

  return (
    <Grid
      item
      sx={{
        display: { xs: mobile ? 'block' : 'none', md: mobile ? 'none' : 'block' },
        minWidth: menuCollapsed ? '3rem' : '15rem',
      }}
      className={classes.wrapper}
    >
      <Box display='flex' justifyContent={menuCollapsed ? 'start' : 'space-between'} className={classes.header}>
        {!menuCollapsed && <img src={logo} alt='Logo' className={classes.image} />}
        <Button onClick={toggleMenu} color='secondary' className={classes.burgerButton}>
          <BurgerMenu color='primary' />
        </Button>
      </Box>
      <Menu />
      {!menuCollapsed && <ShopSelection />}
    </Grid>
  );
};

export default Sidebar;

const useStyles = makeStyles({
  image: {
    objectFit: 'contain',
    paddingLeft: '.5rem',
  },
  wrapper: {
    borderRight: '1px solid grey',
    height: 'auto',
  },
  header: {
    padding: '.5rem .7rem',
  },
  burgerButton: {
    minWidth: 0,
  },
});
