import React from 'react';
import { Grid } from '@mui/material';
import Card from '../components/Reusables/Card';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Orders } from '../assets/icons';

const Dashboard = () => {
  return (
    <Grid container justifyContent={'space-between'} spacing={2}>
      <Grid item xs={12} sm={8}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card title='Something'></Card>
          </Grid>
          <Grid item xs={6}>
            <Card title='Orders' icon={<Orders />} />
          </Grid>
          <Grid item xs={6}>
            <Card title='Something' />
          </Grid>
          <Grid item xs={6}>
            <Card title='Extensions Marketplace' />
          </Grid>
          <Grid item xs={12}>
            <Card title='Latest News'></Card>
          </Grid>
        </Grid>
      </Grid>
      {/* Side Content */}
      <Grid item xs={12} sm={4}>
        <Grid container gap={2}>
          <Card title='Weather today'></Card>
          <Card title='Invite friend' />
          <Card title='Customer Support' />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
