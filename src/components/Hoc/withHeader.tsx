import React, { FC, ReactNode, ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Link, Typography } from '@mui/material';
import { ExternalLink } from '../../assets/icons/ExternalLink';
import { Theme } from '../../styles/theme';

interface ComponentProps {
  title: string;
  Icon: FC;
  link: string;
  key?: number | string;
  children?: ReactNode;
}

export const withHeader = (Component: FC): JSX.Element => {
  const NewComponent = (props: ComponentProps): JSX.Element => {
    const { title, Icon, link } = props;
    const classes = useStyles();

    return (
      <>
        <Box className={classes.headerWrapper}>
          <Box className={classes.header}>
            <Icon />
            <Typography variant='subtitle1' className={classes.title}>
              {title}
            </Typography>
          </Box>
          {link && (
            <Typography variant='subtitle1' component='span'>
              <Link href={link} className={classes.link} color='secondary'>
                Visit our blog <ExternalLink />
              </Link>
            </Typography>
          )}
        </Box>
        <Component {...props} />
      </>
    );
  };
  return NewComponent;
};

const useStyles = makeStyles((theme: Theme) => ({
  headerWrapper: {
    display: 'flex',
    padding: '.5rem',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    color: theme.palette.primary.main,
  },
  title: {
    paddingLeft: '0.2rem',
    fontSize: '1.3rem',
    fontWeight: 500,
  },
  link: {
    cursor: 'pointer',
  },
}));
