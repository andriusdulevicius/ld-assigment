import { useState, FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, MenuItem, FormControl, Select, Typography, SelectChangeEvent } from '@mui/material';

const ShopSelection: FC = () => {
  const classes = useStyles();
  const [shop, setShop] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setShop(event.target.value);
  };

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title}>Select your shop:</Typography>
      <FormControl fullWidth>
        <Select id='shop-select' value={shop} onChange={handleChange}>
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
