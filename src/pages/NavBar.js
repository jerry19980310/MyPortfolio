import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div" style={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                <Box>
                    <Button color="inherit" component={RouterLink} to="/">Home</Button>
                    <Button color="inherit" component={RouterLink} to="/about">About</Button>
                    <Button color="inherit" component={RouterLink} to="/resume">Resume</Button>
                    <Button color="inherit" component={RouterLink} to="/portfolio">Portfolio</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
