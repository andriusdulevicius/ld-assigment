import React from 'react';
import { Box, Typography } from '@mui/material';
import { success } from '../../styles/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  inviteFriend: {
    variant: 'subtitle1',
    fontWeight: 600,
  },
});

const InviteFriendCard = () => {
  const classes = useStyles();

  return (
    <Box padding='1rem'>
      <Typography className={classes.inviteFriend}>
        <Typography color={success} component='span' className={classes.inviteFriend}>
          Receive 50 products
        </Typography>
        {} by inviting a friend who subscribes to a plan. Your friend will receive a 30% discount coupon valid for any
        plan.
      </Typography>
    </Box>
  );
};

export default InviteFriendCard;
