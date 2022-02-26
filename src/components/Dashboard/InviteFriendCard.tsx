import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { withHeader, withFooter } from '../Hoc';
import { Theme } from '../../styles/theme';

const InviteFriendCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.inviteFriend}>
        <Typography component='span' className={classes.greenText}>
          Receive 50 products
        </Typography>
        {} by inviting a friend who subscribes to a plan. Your friend will receive a 30% discount coupon valid for any
        plan.
      </Typography>
    </Box>
  );
};

export default withHeader(withFooter(InviteFriendCard));

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    padding: '1rem',
  },
  inviteFriend: {
    variant: 'subtitle1',
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  greenText: {
    color: theme.palette.success.main,
  },
}));
