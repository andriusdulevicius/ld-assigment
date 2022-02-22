import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Card from '../components/Reusables/Card';
import { mainCards, sideCards } from '../utils/dashboardCardsData';
import { white } from '../styles/colors';

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper} spacing={2}>
      <Grid item xs={12} lg={8} className={classes.mainSection}>
        <Grid container spacing={2} className={classes.mainSection}>
          {mainCards.map(({ Component, grid, backgroundColor, ...rest }, index) => {
            return (
              <Grid item xs={12} {...grid} key={index} className={classes.mainSectionCard}>
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
        <Grid container gap={2}>
          {sideCards.map(({ Component, backgroundColor, ...rest }, index) => {
            return (
              <Card key={index} backgroundColor={backgroundColor || white}>
                <Component {...rest} />
              </Card>
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
    justifyContent: 'space-between',
    margin: '-5rem auto 3rem',
    width: '100%',
    padding: '0',
  },
  mainSection: {
    padding: '0',
    width: '100%',
  },
  mainSectionCard: {
    padding: '0.625rem',
  },
});
