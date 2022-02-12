import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header';
import { Grid, Box } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

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
            <Route path='/page/blog' element={<Dashboard />} />
          </Routes>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;
