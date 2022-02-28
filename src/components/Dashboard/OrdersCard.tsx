import React, { useState, FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import PeriodSelector from '../Reusables/PeriodSelector';
import { withHeader, withFooter } from '../Hoc';
import { Theme } from '../../styles/theme';

const OrdersCard: FC = () => {
  const classes = useStyles();

  const [period, setPeriod] = useState<string>('thisWeek');
  const dailyQty = 48;
  const unitPrice = 34;

  const getQuantity = (period: string) => {
    if (period === 'thisWeek') {
      return 7 * dailyQty;
    } else if (period === 'thisMonth') {
      return 30 * dailyQty;
    } else return 356 * dailyQty;
  };
  const getEarnings = (period: string) => {
    if (period === 'thisWeek') {
      return 7 * dailyQty * unitPrice;
    } else if (period === 'thisMonth') {
      return 30 * dailyQty * unitPrice;
    } else return 356 * dailyQty * unitPrice;
  };

  return (
    <Box className={classes.wrapper}>
      <PeriodSelector period={period} setPeriod={setPeriod} />
      <Box className={classes.orders}>
        <Box className={classes.text}>
          <Typography className={classes.gray} variant='subtitle1' component='div'>
            Orders received:
          </Typography>
          <Typography className={classes.blue} variant='h6' component='div'>
            {getQuantity(period)}
          </Typography>
        </Box>
        <Box className={classes.text}>
          <Typography className={classes.gray} variant='subtitle1' component='div'>
            Earnings:
          </Typography>
          <Typography className={classes.blue} variant='h6' component='div'>
            {getEarnings(period)} Eur
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default withFooter(withHeader(OrdersCard));

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: 'relative',
  },
  orders: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  blue: {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
  gray: {
    color: theme.palette.darkGray.main,
  },
}));
