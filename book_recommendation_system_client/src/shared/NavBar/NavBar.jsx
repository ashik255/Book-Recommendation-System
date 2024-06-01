import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchBar from './SearchBar';
// import SearchBar from './SearchBar'; // Make sure this path is correct based on your file structure

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', mr: 2 }}>
            LOGO
          </Typography>
        </Box>
        <SearchBar to="/book" searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/signin">
            Sign In
          </Button>
          <IconButton color="inherit" component={Link} to="/profile">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
