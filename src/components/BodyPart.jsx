import React from 'react';
import { Stack, Typography } from '@mui/material';
//import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #a0e70f', background: '#fff', borderBottomLeftRadius: '0px', width: '150px', height: '150px', cursor: 'pointer', gap: '20px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '150px', height: '150px', cursor: 'pointer', gap: '20px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
        <Typography fontSize="20px" fontWeight="bold" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
