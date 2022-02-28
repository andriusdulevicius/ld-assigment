import React, { useState, useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../context';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Collapse } from '@mui/material';
import IconExpandLess from '@mui/icons-material/ExpandLess';
import IconExpandMore from '@mui/icons-material/ExpandMore';
import { Theme } from './../../styles/theme';
import { MenuItemType } from '../Sidebar/Menu';

const MenuItem: FC<MenuItemType> = ({ label, link, Icon, children = [] }) => {
  const classes = useStyles();
  const [state, setState] = useGlobalState();
  const { menuCollapsed } = state;
  const isExpandable: boolean = children && children.length > 0;
  const [expanded, setExpanded] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    menuCollapsed && setExpanded(false);
  }, [menuCollapsed]);

  const handleClick = (link?: string) => {
    isExpandable && setState({ ...state, menuCollapsed: false });
    setExpanded(!expanded);
    link && navigate(link);
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
      <List component='div' disablePadding className={classes.collapsibleMenu}>
        {children.map((item: MenuItemType, index: number) => (
          <MenuItem key={index} {...item} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      <ListItem button className={classes.menuItem} children={MenuItemBase} onClick={() => handleClick(link)} />

      {MenuItemChildren}
    </>
  );
};

export default MenuItem;

const useStyles = makeStyles((theme: Theme) => ({
  menuItem: {
    padding: '.75rem 1.2rem',
    '& .MuiListItemIcon-root': {
      minWidth: 0,
    },
    '& .MuiListItemText-root': {
      paddingLeft: '.5rem',
    },
    '&.active': {
      paddingLeft: '1rem',
      background: 'rgba(0, 0, 0, 0.06)',
      borderLeft: `3px solid ${theme.palette.secondary.main}`,

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
  collapsibleMenu: {
    paddingLeft: '1rem',
    backgroundColor: theme.palette.menu.main,
  },
}));
