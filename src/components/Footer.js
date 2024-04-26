import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, IconButton } from '@mui/material';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import avatarImage from '../assets/Designer5.png';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://qut.edu.au/">
      {props.title}
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  );
}


function Footer(props) {
    const { description, title } = props;
  
    return (
        <Box component="footer" color="bg" sx={{
            py: 3,
            px: 2,
            mt: 'auto',
          }}>
        <Container maxWidth="lg">
          <IconButton size="large" edge="start" color="inherit" aria-label="logo" align="center" component={RouterLink} to="/">
            <Avatar alt="Jerry Studio" src={avatarImage} />
          </IconButton>
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {description}
          </Typography>
          <Copyright title={props.title}/>
        </Container>
      </Box>
    );
  }
  
  Footer.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  
  export default Footer;