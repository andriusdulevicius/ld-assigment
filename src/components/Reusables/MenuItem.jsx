import React, { useState, useEffect, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalState } from '../../context';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Collapse } from '@mui/material';
import IconExpandLess from '@mui/icons-material/ExpandLess';
import IconExpandMore from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    '&.active': {
      background: 'rgba(0, 0, 0, 0.06)',
      '& .MuiListItemIcon-root': {
        color: theme.palette.secondary.main,
      },
      '& .MuiListItemText-root': {
        color: theme.palette.secondary.main,
      },
    },
  },
  menuItemIcon: {
    color: theme.palette.primary.main,
  },
}));

const MenuItem = ({ label, link, Icon, children = [] }) => {
  const classes = useStyles();
  const [state, setState] = useGlobalState();
  const { menuCollapsed } = state;
  const isExpandable = children && children.length > 0;
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [menuCollapsed]);

  const handleClick = () => {
    isExpandable && setState({ ...state, menuCollapsed: false });
    setExpanded(!expanded);
  };

  const MenuItemBase = (
    <>
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      {!menuCollapsed && <ListItemText primary={label} inset={!Icon} />}

      {/* If has children render chevron icon */}
      {isExpandable && !expanded && !menuCollapsed && <IconExpandMore />}
      {isExpandable && expanded && !menuCollapsed && <IconExpandLess />}
    </>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={expanded} timeout='auto' unmountOnExit>
      <Divider />
      <List component='div' disablePadding>
        {children.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      <ListItem
        button
        className={classes.menuItem}
        children={MenuItemBase}
        onClick={handleClick}
        {...(link
          ? {
              component: forwardRef((props, ref) => <NavLink {...props} />),
              to: link,
            }
          : {})}
      />

      {MenuItemChildren}
    </>
  );
};

export default MenuItem;
