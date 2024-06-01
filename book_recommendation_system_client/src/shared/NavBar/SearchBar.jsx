import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from '../../pages/bookcard/BookCard';
import BookDetail from '../../pages/bookdetails/BookDetail';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    if (query) {
      try {
        // Retrieve access token from local storage
        const accessToken = localStorage.getItem('authToken');

        // Include access token in the request headers
        const response = await axios.get(`http://localhost:8080/books/${encodeURIComponent(query)}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        setBooks(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data from Google Books API", error);
      }
    }
  };
  
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={8}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search for books"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            // component={Link}
            to="/book"
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          {books.map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
              <BookCard book={book} />
              {/* <BookDetail book={book} /> */}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>

  );
};
// export books;
export default SearchBar;
