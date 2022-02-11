import { useState } from 'react';
import { Box, MenuItem, FormControl, Select, Typography } from '@mui/material';

export default function ShopSelection() {
  const [shop, setShop] = useState('');

  const handleChange = (event) => {
    setShop(event.target.value);
  };

  return (
    <Box sx={{ width: '90%', margin: '3rem auto' }}>
      <Typography margin='1rem 0'>Select your shop:</Typography>
      <FormControl fullWidth>
        <Select id='shop-select' value={shop} label='Shop' onChange={handleChange}>
          <MenuItem value='FenohStore'>Fenoh store</MenuItem>
          <MenuItem value='AmazonStore'>Amazon store</MenuItem>
          <MenuItem value='EbayStore'>Ebay store</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
