import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import pic from "./logo.png";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppBar sx={{ bgcolor: "text.disabled" }} position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "light", mr: 2 }}
          >
            <img
              sx={{ ml: 5 }}
              style={{ height: "32px", width: "32px", paddingLeft: "20px" }}
              src={pic}
              alt=""
            />
          </Typography>
        </Box>
        {/* <SearchBar component={Link} to="/book" searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
