import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '../components/Reusables/Card';
import { Grid, Box } from '@mui/material';

const Example = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.wrapper}>Example page of our blogPosts</Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card title='Post 1' />
        </Grid>
        <Grid item xs={4}>
          <Card title='Post 2' />
        </Grid>
        <Grid item xs={4}>
          <Card title='Post 3' />
        </Grid>
      </Grid>
    </div>
  );
};

export default Example;

const useStyles = makeStyles({
  wrapper: {
    marginBottom: '1rem',
  },
});
