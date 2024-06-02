import React from "react";
import {
  Container,
  Box,
  Typography,
  Link,
  CssBaseline,
  Grid,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container variant="h2" component="h3" gutterBottom sx={{ mt: 8, mb: 2 }}>
        " বই পড়ুন নিজেকে গড়ুন "
      </Container>
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.text.primary
            : theme.palette.text.secondary,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Book Shop BD
            </Typography>
            <Typography variant="body2" color="textSecondary">
              © 2024 Your Company Name. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/about" variant="body2" display="block" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link
              href="/contact"
              variant="body2"
              display="block"
              sx={{ mb: 1 }}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              variant="body2"
              display="block"
              sx={{ mb: 1 }}
            >
              Privacy Policy
            </Link>
            <Link href="/terms" variant="body2" display="block" sx={{ mb: 1 }}>
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton href="" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton href="" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton href="" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
