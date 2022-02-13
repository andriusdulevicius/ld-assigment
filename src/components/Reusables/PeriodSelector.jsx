import React from 'react';
import { Box, Select, MenuItem, FormControl } from '@mui/material';

const PeriodSelector = ({ period, setPeriod }) => {
  return (
    <Box position='absolute' top='-3.1rem' right='1rem'>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
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
