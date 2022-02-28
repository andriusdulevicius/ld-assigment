import React, { FC } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header';
import { Grid, Box } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Example from '../pages/Example';
import { ContactUs } from '../pages/ContactUs';

interface DashboardCardRoute {
  path: string;
  Component: FC;
}

const dashboardCardsRoutes: DashboardCardRoute[] = [
  {
    path: '/',
    Component: Dashboard,
  },
  {
    path: '/page/blog',
    Component: Example,
  },
  {
    path: '/page/catalog',
    Component: Example,
  },
  {
    path: '/page/orders',
    Component: Example,
  },
  {
    path: '/page/costumer',
    Component: Example,
  },
  {
    path: '/page/discount',
    Component: Example,
  },
  {
    path: '/page/exit',
    Component: Example,
  },
  {
    path: '/page/discount2',
    Component: Example,
  },
  {
    path: '/page/exit2',
    Component: Example,
  },
  {
    path: '/page/delivery',
    Component: Example,
  },
  {
    path: '/page/payment',
    Component: Example,
  },
  {
    path: '/page/design',
    Component: Example,
  },
  {
    path: '/page/subscription',
    Component: Example,
  },
  {
    path: '/page/extensions',
    Component: Example,
  },
  {
    path: '/page/setting',
    Component: Example,
  },
  {
    path: '/page/logout',
    Component: Example,
  },
  {
    path: '/page/inviteFriend',
    Component: Example,
  },
  {
    path: '/page/contactus',
    Component: ContactUs,
  },
];

const Layout: FC = () => {
  const location = useLocation();
  const path = location.pathname?.split('/');
  const pathName = path[path.length - 1];
  const pageName = pathName === '' ? 'Dashboard' : pathName;

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Sidebar />
      <Grid item xs>
        <Header page={pageName} />
        <Box px='2rem' py='1rem'>
          <Routes>
            {dashboardCardsRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;
