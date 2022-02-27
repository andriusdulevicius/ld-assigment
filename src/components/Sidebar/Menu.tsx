import React, { FC } from 'react';
import List from '@mui/material/List';
import MenuItem from '../Reusables/MenuItem';

import {
  Home,
  Orders,
  ShoppingCart,
  User,
  Target,
  Truck,
  Dollar,
  Brush,
  Subscription,
  Extensions,
  Settings,
  Logout,
} from '../../assets/icons';

const menuItems = [
  { label: 'Dashboard', Icon: Home, link: '/' },
  { label: 'Catalog', Icon: ShoppingCart, link: '/page/catalog' },
  { label: 'Orders', Icon: Orders, link: '/page/orders' },
  { label: 'Customer', Icon: User, link: '/page/customer' },
  {
    label: 'Marketing',
    Icon: Target,
    children: [
      { label: 'Discount codes', link: '/page/discount' },
      { label: 'Exit intent', link: '/page/exit' },
      {
        label: 'Checkout Features',
        children: [
          { label: 'Discount codes', link: '/page/discount2' },
          { label: 'Exit intent', link: '/page/exit2' },
        ],
      },
    ],
  },
  { label: 'Delivery Options', Icon: Truck, link: '/page/delivery' },
  { label: 'Payment Options', Icon: Dollar, link: '/page/payment' },
  { label: 'Store Design', Icon: Brush, link: '/page/design' },
  { label: 'Subscription', Icon: Subscription, link: '/page/subscription' },
  { label: 'Extensions', Icon: Extensions, link: '/page/extensions' },
  { label: 'Setting', Icon: Settings, link: '/page/settings' },
  { label: 'Logout', Icon: Logout, link: '/page/logout' },
];

const Menu = (): FC => {
  return (
    <List component='nav' disablePadding>
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </List>
  );
};

export default Menu;
