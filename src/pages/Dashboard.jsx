import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Card from '../components/Reusables/Card';
import { mainCards, sideCards } from '../utils/dashboardCardsData';
import { white } from '../styles/colors';

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper} spacing={3}>
      <Grid item xs={12} lg={8} className={classes.mainSection}>
        <Grid container className={classes.mainSection} spacing={3}>
          {mainCards.map(({ Component, grid, backgroundColor, ...rest }, index) => {
            return (
              <Grid item xs={12} {...grid} key={index}>
                <Card backgroundColor={backgroundColor || white}>
                  <Component {...rest} />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      {/* Side Content */}
      <Grid item xs={12} lg={4}>
        <Grid container gap={3}>
          {sideCards.map(({ Component, backgroundColor, ...rest }, index) => {
            return (
              <Grid item xs={12} key={index}>
                <Card backgroundColor={backgroundColor || white}>
                  <Component {...rest} />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

const useStyles = makeStyles({
  wrapper: {
    margin: '-4rem -0.75rem 3rem',
    width: '100%',
  },
  mainSection: {
    padding: '0',
  },
});
