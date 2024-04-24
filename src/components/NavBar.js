import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from '@mui/material';
import LandscapeIcon from '@mui/icons-material/Landscape';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';


const pages = ['Home', 'About', 'Resume', 'Portfolio'];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

const theme = createTheme({
    palette: {
        ochre: {
        main: '#C3986D',
        light: '#C3986D',
        dark: '#512d15',
        contrastText: '#242105',
        },
    },
    });

    return (
        <ThemeProvider theme={theme}>
<AppBar position="static" theme={theme} color="ochre">
            <Toolbar variant="dense">
                <IconButton size="large" edge="start" color="inherit" aria-label="logop" sx={{display:{xs:'none', md:'flex'}}} component={RouterLink} to={"/"}>
                    <Avatar alt="myicon" src="./Designer5.png" />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 , display:{xs:'none', md:'flex'}}}>
                    Jerry Studio
                </Typography>
                <Box sx={{display:{xs:'none', md:'flex'}}}>
                    {pages.map((page) => (
                        <Button key={page} color="inherit" component={RouterLink} to={page === 'Home' ? '/' : `/${page}`}>{page}</Button>
                    ))}
                </Box>
                <IconButton size="large" edge="start" color="inherit" aria-label="logop" sx={{display:{xs:'flex', md:'none'}}} >
                    <Avatar alt="myicon" src="./Designer5.png" />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 , display:{xs:'flex', md:'none'}}}>
                    Jerry Studio
                </Typography>
                <Box sx={{ display:{xs:'flex', md:'none'}}}>
                    <IconButton size="large" edge="start" color="inherit" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={{display:{xs:'flex', md:'none'}}}>
                        {pages.map((page) => (
                            <Button onClick={toggleDrawer(false)} key={page} color="inherit" component={RouterLink} to={page === 'Home' ? '/' : `/${page}`}>{page}</Button>
                        ))}
                    </Drawer>
                </Box>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
        
    );
};

export default NavBar;
