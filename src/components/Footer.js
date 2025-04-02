import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, IconButton, Container, Link, Avatar, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatarImage from '../assets/Designer5.png';


function Copyright(props) {
  return (
    <Typography variant="body2" color="primary"  align="center">
      {'Copyright © '}
      <Link color="inherit" href="mailto:jerrykao0310@gmail.com">
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
    <Box component="footer"   sx={{ py: 3, px: 2, mt: 'auto' }} >
      <Container maxWidth="lg" color="primary" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  color: "primary"}}>
        <IconButton size="large" edge="start"  aria-label="logo" component={RouterLink} to="/">
          <Avatar alt="Jerry Studio" src={avatarImage} />
        </IconButton>
        <Typography variant="h6" align="center" color="primary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="primary" component="p">
          {description}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
          <Link href="https://www.facebook.com/kepin25333985" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/yuchiasheng-kao-551999303/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </Link>
        </Stack>
        <Copyright title={title} color="text.primary"/>
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;