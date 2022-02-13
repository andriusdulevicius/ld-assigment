import React from 'react';
import { Paper, Box, Link, Typography } from '@mui/material';
import { ExternalLink } from '../../assets/icons/ExternalLink';
import BottomLink from './BottomLink';

const Card = ({ children, title, blogLink, icon, bottomLinkText, bottomLinkColor, linkTo }) => {
  return (
    <Paper rounded='true' sx={{ minHeight: '13rem', width: '100%' }}>
      <Box display='flex' sx={{ p: '0.8rem' }} justifyContent='space-between'>
        <Box display='flex' gap='0.5rem'>
          {icon}
          <Typography variant='subtitle1' pl='0.2rem'>
            {title}
          </Typography>
        </Box>
        {blogLink && (
          <Typography variant='subtitle1' component='span'>
            <Link to={blogLink} style={{ cursor: 'pointer' }}>
              Visit our blog <ExternalLink />
            </Link>
          </Typography>
        )}
      </Box>
      {children}
      {bottomLinkText && (
        <Box padding='1rem'>
          <BottomLink linkText={bottomLinkText} linkColor={bottomLinkColor} linkTo={linkTo} />
        </Box>
      )}
    </Paper>
  );
};

export default Card;
