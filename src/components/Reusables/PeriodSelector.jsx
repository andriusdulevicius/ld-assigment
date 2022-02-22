import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Select, MenuItem, FormControl } from '@mui/material';

const PeriodSelector = ({ period, setPeriod }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <FormControl className={classes.formControl} variant='standard'>
        <Select id='period-select' variant='standard' value={period} onChange={(e) => setPeriod(e.target.value)}>
          <MenuItem value='thisWeek'>This week</MenuItem>
          <MenuItem value='thisMonth'>This month</MenuItem>
          <MenuItem value='thisYear'>This year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PeriodSelector;

const useStyles = makeStyles({
  wrapper: {
    position: 'absolute',
    right: '0',
    top: '-3.7rem',
  },
  formControl: {
    margin: '1rem',
    minWidth: '120px',
  },
});
