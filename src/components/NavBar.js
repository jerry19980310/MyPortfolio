import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, Box, List, ListItemButton, ListItemText, Switch, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import avatarImage from '../assets/Designer5.png';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';


const NavBar = (props) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language === 'en'); // 初始值為 true (英文)


  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const handleLanguageSwitch = (event) => {
    const newLanguage = event.target.checked ? 'en' : 'zh';
    i18n.changeLanguage(newLanguage);
    setLanguage(event.target.checked);
  };

  const navItems = [
    { text: t('home'), path: '/' },
    { text: t('about'), path: '/about' },
    { text: t('portfolio'), path: '/portfolio' },
    { text: t('resume.title'), path: '/resume' },
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

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', marginLeft: 2 }}>
          <Typography variant="body1" sx={{ marginRight: 1 }}>{language ? 'EN' : '中'}</Typography>
          <Switch checked={language} onChange={handleLanguageSwitch} />
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} PaperProps={{ sx: { width: 260, height: '100vh', backgroundColor: '#f9f9f9' } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2, py: 1 }}>
          <Typography variant="h6" color="primary">{language ? 'Menu' : '目錄'}</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />

        {/* Drawer Navigation */}
        <List>
          {navItems.map((item) => (
            <ListItemButton key={item.text} component={RouterLink} to={item.path} onClick={toggleDrawer(false)} sx={{ px: 3, py: 1 }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
        
        <Divider sx={{ my: 2 }} />

        {/* Language Switch */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 3, py: 1 }}>
          <Typography variant="body1">{language ? 'EN' : '中'}</Typography>
          <Switch checked={language} onChange={handleLanguageSwitch} />
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
