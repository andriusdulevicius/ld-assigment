import React from 'react';
import Card from '../components/Reusables/Card';
import { Grid, Box } from '@mui/material';

const Example = () => {
  return (
    <div>
      <Box mb='1rem'>Example page of our blogPosts</Box>
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
