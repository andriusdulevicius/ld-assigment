import React from 'react';
import { Grid } from '@mui/material';
import Card from '../components/Reusables/Card';
import LatestNews from '../components/Dashboard/LatestNews';
import WeatherCard from '../components/Dashboard/WeatherCard';
import RandomActivity from '../components/Dashboard/RandomActivity';
import MobileAdvert from '../components/Dashboard/MobileAdvert';
import TrustPilotAdd from '../components/Dashboard/TrustPilotAdd';
import InviteFriendCard from '../components/Dashboard/InviteFriendCard';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Orders, Customers, Headphones } from '../assets/icons';
import { secondary } from '../styles/colors';
import CustomerSupportCard from '../components/Dashboard/CustomerSupportCard';

const Dashboard = () => {
  return (
    <Grid container justifyContent={'space-between'} spacing={2}>
      <Grid item xs={12} sm={8}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card title='Challenge of the day' icon={<AccessibilityNewIcon />}>
              <RandomActivity />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card title='Orders' icon={<Orders />} />
          </Grid>
          <Grid item xs={6}>
            <MobileAdvert />
          </Grid>
          <Grid item xs={6}>
            <Card title='Extensions Marketplace' />
          </Grid>
          <Grid item xs={12}>
            <Card title='Latest News' blogLink='page/blog' icon={<ArticleOutlinedIcon />}>
              <LatestNews />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      {/* Side Content */}
      <Grid item xs={12} sm={4}>
        <Grid container gap={2}>
          <Card title='Weather today' icon={<WbSunnyOutlinedIcon />}>
            <WeatherCard />
          </Card>
          <TrustPilotAdd />
          <Card
            title='Invite friend'
            icon={<Customers />}
            bottomLinkText='Start inviting friends!'
            bottomLinkColor={secondary}
            linkTo='/page/inviteFriend'
          >
            <InviteFriendCard />
          </Card>
          <Card title='Customer Support' icon={<Headphones />}>
            <CustomerSupportCard />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
