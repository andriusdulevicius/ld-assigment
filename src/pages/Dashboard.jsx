import React from 'react';
import { makeStyles } from '@mui/styles';
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
import { Orders, Extensions, Customers, Headphones } from '../assets/icons';
import { success, white, trustPilotBlue, orange } from '../styles/colors';
import CustomerSupportCard from '../components/Dashboard/CustomerSupportCard';
import OrdersCard from '../components/Dashboard/OrdersCard';
import ExtensionsCard from '../components/Dashboard/ExtensionsCard';

const mainCards = [
  {
    Component: RandomActivity,
    title: 'Challenge of the day',
    Icon: AccessibilityNewIcon,
    grid: { md: 6 },
  },
  {
    Component: OrdersCard,
    title: 'Orders',
    Icon: Orders,
    footerText: '10 free tips to increase your sales!',
    footerColor: 'secondary',
    footerLink: '#',
    grid: { md: 6 },
  },
  {
    Component: MobileAdvert,
    backgroundColor: orange,
    grid: { md: 6 },
  },
  {
    Component: ExtensionsCard,
    title: 'Extension Marketplace',
    Icon: Extensions,
    footerText: 'Discover all extensions',
    footerColor: 'secondary',
    footerLink: '/pages/extensions',
    grid: { md: 6 },
  },
  {
    Component: LatestNews,
    title: 'Latest News',
    Icon: ArticleOutlinedIcon,
    link: '/pages/lastestNews',
  },
];

const sideCards = [
  {
    Component: WeatherCard,
    title: 'Weather today',
    Icon: WbSunnyOutlinedIcon,
  },
  {
    Component: TrustPilotAdd,
    backgroundColor: trustPilotBlue,
    footerText: 'Write a review on Tristpilot',
    footerColor: success,
    footerLink: 'www.trustpilot.com',
  },
  {
    Component: InviteFriendCard,
    title: 'Invite Friend',
    Icon: Customers,
    footerText: 'Start inviting friends!',
    footerColor: 'secondary',
    footerLink: '#',
  },
  {
    Component: CustomerSupportCard,
    title: 'Customer Support',
    Icon: Headphones,
  },
];

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper} spacing={2}>
      <Grid item xs={12} lg={8}>
        <Grid container spacing={2} className={classes.root}>
          {mainCards.map(({ Component, grid, backgroundColor, ...rest }, index) => {
            return (
              <Grid item xs={12} {...grid} key={index}>
                <Card backgroundColor={backgroundColor || white}>
                  <Component {...rest} />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      {/* Side Content */}
      <Grid item xs={12} lg={4}>
        <Grid container gap={2}>
          {sideCards.map(({ Component, backgroundColor, ...rest }, index) => {
            return (
              <Card key={index} backgroundColor={backgroundColor || white}>
                <Component {...rest} />
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  wrapper: {
    justifyContent: 'space-between',
    margin: '-5rem auto 3rem',
  },
});
