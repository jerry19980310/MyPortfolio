import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import heroImage from '../assets/Designer2.png';

const HomePage = () => {
  return (
    <Box
      textAlign="center"
      pt={8}
      pb={8}
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '8px'
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ color: '#fff', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
          Capturing Life's Best Moments
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph sx={{ color: '#fff', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
          Explore the world through my lens and experience the beauty of each moment captured in time.
        </Typography>
        <Button variant="contained" color="primary" startIcon={<CameraEnhanceIcon />} component={RouterLink} to="/portfolio">
          View Portfolio
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
