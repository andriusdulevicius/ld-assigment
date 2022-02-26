import LatestNews from '../components/Dashboard/LatestNews.tsx';
import WeatherCard from '../components/Dashboard/WeatherCard.tsx';
import RandomActivity from '../components/Dashboard/RandomActivity.tsx';
import MobileAdvert from '../components/Dashboard/MobileAdvert.tsx';
import TrustPilotAdd from '../components/Dashboard/TrustPilotAdd.tsx';
import InviteFriendCard from '../components/Dashboard/InviteFriendCard.tsx';
import CustomerSupportCard from '../components/Dashboard/CustomerSupportCard.tsx';
import OrdersCard from '../components/Dashboard/OrdersCard.tsx';
import ExtensionsCard from '../components/Dashboard/ExtensionsCard.tsx';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Orders, Extensions, Customers, Headphones } from '../assets/icons';
import { success, trustPilotBlue, orange } from '../styles/colors';

export const mainCards = [
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
    footerLink: {
      text: '10 free tips to increase your sales!',
      color: 'secondary',
      href: 'https://keap.com/business-success-blog/sales/sales-process/how-to-increase-sales',
      target: '_blank',
    },
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
    footerLink: {
      text: 'Discover all extensions',
      color: 'secondary',
      href: '/page/extensions',
    },
    grid: { md: 6 },
  },
  {
    Component: LatestNews,
    title: 'Latest News',
    Icon: ArticleOutlinedIcon,
    link: '/page/blog',
  },
];

export const sideCards = [
  {
    Component: WeatherCard,
    title: 'Weather today',
    Icon: WbSunnyOutlinedIcon,
  },
  {
    Component: TrustPilotAdd,
    backgroundColor: trustPilotBlue,
    footerLink: {
      text: 'Write a review on Tristpilot',
      color: success,
      href: 'https://www.trustpilot.com',
      target: '_blank',
    },
  },
  {
    Component: InviteFriendCard,
    title: 'Invite Friend',
    Icon: Customers,
    footerLink: {
      text: 'Start inviting friends!',
      color: 'secondary',
      href: '/page/inviteFriend',
    },
  },
  {
    Component: CustomerSupportCard,
    title: 'Customer Support',
    Icon: Headphones,
  },
];
