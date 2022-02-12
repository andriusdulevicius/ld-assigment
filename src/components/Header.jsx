import React from 'react';
import { Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useGlobalState } from '../context';
import { BurgerMenu } from '../assets/icons/BurgerMenu';
import { Zap } from '../assets/icons/Zap';

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
        <Zap />
        Whats new
      </Grid>
    </Grid>
  );
};

export default Header;
