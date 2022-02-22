import LatestNews from '../components/Dashboard/LatestNews';
import WeatherCard from '../components/Dashboard/WeatherCard';
import RandomActivity from '../components/Dashboard/RandomActivity';
import MobileAdvert from '../components/Dashboard/MobileAdvert';
import TrustPilotAdd from '../components/Dashboard/TrustPilotAdd';
import InviteFriendCard from '../components/Dashboard/InviteFriendCard';
import CustomerSupportCard from '../components/Dashboard/CustomerSupportCard';
import OrdersCard from '../components/Dashboard/OrdersCard';
import ExtensionsCard from '../components/Dashboard/ExtensionsCard';
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
    footerText: '10 free tips to increase your sales!',
    footerColor: 'secondary',
    footerLink: 'https://keap.com/business-success-blog/sales/sales-process/how-to-increase-sales',
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
    footerLink: '/page/extensions',
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
    footerText: 'Write a review on Tristpilot',
    footerColor: success,
    footerLink: 'https://www.trustpilot.com',
  },
  {
    Component: InviteFriendCard,
    title: 'Invite Friend',
    Icon: Customers,
    footerText: 'Start inviting friends!',
    footerColor: 'secondary',
    footerLink: '/page/inviteFriend',
  },
  {
    Component: CustomerSupportCard,
    title: 'Customer Support',
    Icon: Headphones,
  },
];
