import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from '@mui/material';
import LandscapeIcon from '@mui/icons-material/Landscape';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'About', 'Resume', 'Portfolio'];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };


    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton size="large" edge="start" color="inherit" aria-label="logop" sx={{display:{xs:'none', md:'flex'}}} component={RouterLink} to={"/"}><LandscapeIcon/></IconButton>
                <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 , display:{xs:'none', md:'flex'}}}>
                    My Portfolio
                </Typography>
                <Box sx={{display:{xs:'none', md:'flex'}}}>
                    {pages.map((page) => (
                        <Button key={page} color="inherit" component={RouterLink} to={page === 'Home' ? '/' : `/${page}`}>{page}</Button>
                    ))}
                </Box>
                <Box sx={{display:{xs:'flex', md:'none'}}}>
                    <IconButton size="large" edge="start" color="inherit" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)} sx={{display:{xs:'flex', md:'none'}}}>
                        {pages.map((page) => (
                            <Button onClick={toggleDrawer(false)} key={page} color="inherit" component={RouterLink} to={page === 'Home' ? '/' : `/${page}`}>{page}</Button>
                        ))}
                    </Drawer>
                </Box>
                <IconButton size="large" edge="start" color="inherit" aria-label="logop" sx={{display:{xs:'flex', md:'none'}}} ><LandscapeIcon/></IconButton>
                <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 , display:{xs:'flex', md:'none'}}}>
                    My Portfolio
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
