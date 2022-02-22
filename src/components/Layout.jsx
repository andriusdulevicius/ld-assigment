import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header';
import { Grid, Box } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Example from './../pages/Example';

const Layout = () => {
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
            <Route path='/' element={<Dashboard />} />
            <Route path='/page/blog' element={<Example />} />
            <Route path='/page/catalog' element={<Example />} />
            <Route path='/page/orders' element={<Example />} />
            <Route path='/page/customer' element={<Example />} />
            <Route path='/page/discount' element={<Example />} />
            <Route path='/page/exit' element={<Example />} />
            <Route path='/page/discount2' element={<Example />} />
            <Route path='/page/exit2' element={<Example />} />
            <Route path='/page/delivery' element={<Example />} />
            <Route path='/page/payment' element={<Example />} />
            <Route path='/page/design' element={<Example />} />
            <Route path='/page/subscription' element={<Example />} />
            <Route path='/page/extensions' element={<Example />} />
            <Route path='/page/setting' element={<Example />} />
            <Route path='/page/logout' element={<Example />} />
            <Route path='/page/inviteFriend' element={<Example />} />
          </Routes>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;
