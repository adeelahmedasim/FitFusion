import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px">
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pb='20px' pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
    </Stack>
    
  </Box>
);

export default Footer;
