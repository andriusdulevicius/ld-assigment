import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';
import { darkGray, darkBlue } from '../../styles/colors';
import PeriodSelector from '../Reusables/PeriodSelector';

const OrdersCard = () => {
  const [period, setPeriod] = useState('thisWeek');
  const dailyQty = 48;
  const unitPrice = 34;

  function getQuantity(period) {
    if (period === 'thisWeek') {
      return 7 * dailyQty;
    } else if (period === 'thisMonth') {
      return 30 * dailyQty;
    } else return 356 * dailyQty;
  }
  function getEarnings(period) {
    if (period === 'thisWeek') {
      return 7 * dailyQty * unitPrice;
    } else if (period === 'thisMonth') {
      return 30 * dailyQty * unitPrice;
    } else return 356 * dailyQty * unitPrice;
  }

  return (
    <Box position='relative'>
      <PeriodSelector period={period} setPeriod={setPeriod} />
      <Box display='flex' flexDirection='column' padding='1rem'>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1' component='div' color={darkGray}>
            Orders received:
          </Typography>
          <Typography variant='h6' component='div' color={darkBlue}>
            {getQuantity(period)}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1' component='div' color={darkGray}>
            Earnings:
          </Typography>
          <Typography variant='h6' component='div' color={darkBlue}>
            {getEarnings(period)} Eur
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OrdersCard;
