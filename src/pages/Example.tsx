import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '../components/Reusables/Card';
import { Grid, Box } from '@mui/material';

const Example = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.wrapper}>Example page</Box>
      <Grid container spacing={2}>
        {[...Array(3)].map(() => (
          <Grid item xs={4}>
            <Card>
              <span>Example</span>
            </Card>
          </Grid>
        ))}
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
