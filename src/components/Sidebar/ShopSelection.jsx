import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, MenuItem, FormControl, Select, Typography } from '@mui/material';

const ShopSelection = () => {
  const classes = useStyles();

  const [shop, setShop] = useState('');

  const handleChange = (event) => {
    setShop(event.target.value);
  };

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title}>Select your shop:</Typography>
      <FormControl fullWidth>
        <Select id='shop-select' value={shop} label='Shop' onChange={handleChange}>
          <MenuItem value='FenohStore'>Fenoh store</MenuItem>
          <MenuItem value='AmazonStore'>Amazon store</MenuItem>
          <MenuItem value='EbayStore'>Ebay store</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ShopSelection;

const useStyles = makeStyles({
  wrapper: {
    width: '90%',
    margin: '3rem auto',
  },
  title: {
    margin: '1rem 0',
  },
});
