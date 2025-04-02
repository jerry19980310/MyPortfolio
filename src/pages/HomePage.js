import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import heroImage from '../assets/Designer2.png';
import { useTranslation } from 'react-i18next';

const HomePage = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


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
          Building Tomorrow's Solutions
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph sx={{ color: '#fff', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
          Dive into the world of code and experience the art of crafting innovative software.
        </Typography>
        <Button variant="contained" color="primary" startIcon={<CameraEnhanceIcon />} component={RouterLink} to="/portfolio">
          {t('view_portfolio')}
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
