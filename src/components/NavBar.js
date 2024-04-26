import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, Box, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import avatarImage from '../assets/Designer5.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';// Drawer close icon


const NavBar = (props) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Resume', path: '/resume' },
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Avatar  */}
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ marginRight: 'auto' }} component={RouterLink} to="/">
          <Avatar alt="Jerry Studio" src={avatarImage} />
        </IconButton>
        
        {/* "Jerry Studio" */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'block' } }}>
          {props.title}
        </Typography>

        {/* Menu icon*/}
        <IconButton edge="end" color="inherit" aria-label="menu" sx={{ marginLeft: 'auto', display: { md: 'none' } }} onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>

        {/* Buttons visible only on md screens and above */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto' }}>
        {navItems.map((item) => (
          <Button key={item.text} size="large" color="inherit" component={RouterLink}  to={item.path}>{item.text}</Button>
        ))}
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={{ width: 250 }}>
        <IconButton onClick={toggleDrawer(false)} sx={{ justifyContent: 'flex-start' }}>
          <ChevronRightIcon />
        </IconButton>
        <List>
          {navItems.map((item) => (
            <ListItem  key={item.text} component={RouterLink} to={item.path} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} sx={{ fontSize: '0.875rem' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
