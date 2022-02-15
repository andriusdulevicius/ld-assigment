import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { success } from '../../styles/colors';

const InviteFriendCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
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

const useStyles = makeStyles({
  wrapper: {
    padding: '1rem',
  },
  inviteFriend: {
    variant: 'subtitle1',
    fontWeight: 600,
  },
});
