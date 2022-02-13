import React from 'react';
import { Button } from '@mui/material';

const PrimaryButton = ({ children, onClick }) => {
  return (
    <Button color='secondary' onClick={onClick} variant='contained' size='small'>
      {children}
    </Button>
  );
};

export default PrimaryButton;
