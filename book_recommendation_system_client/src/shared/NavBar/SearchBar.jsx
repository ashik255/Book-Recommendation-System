import React, { useState } from "react";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import BookCard from "../../pages/bookcard/BookCard";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = async () => {
    if (query) {
      try {
        setSearching(true);
        const accessToken = localStorage.getItem("authToken");

        // Fetch books
        const response = await axios.get(
          `http://localhost:8080/books/${encodeURIComponent(query)}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setBooks(response.data);

        // Post search query to search history
        await axios.post(
          "http://localhost:8080/users/searchHistory",
          { query },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setSearching(false);
      } catch (error) {
        console.error("Error fetching data from Google Books API", error);
        setSearching(false);
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
            variant="contained"
            color="primary"
            onClick={handleSearch}
            disabled={searching}
          >
            {searching ? "Searching..." : "Search"}
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          {books.map((book) => (
            <Grid item key={book.bookId} xs={12} sm={6} md={4} lg={3}>
              <BookCard book={book} />
            </Grid>
          ))}
          {books.length === 0 && !searching && (
            <Grid item xs={12}>
              <Typography variant="body1">No books found.</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default SearchBar;
