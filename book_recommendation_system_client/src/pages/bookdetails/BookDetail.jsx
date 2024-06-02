import React, { useState, useEffect } from "react";
import { Container, Paper, Typography, Box, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const { bookId } = useParams();
  console.log("bookId:", bookId);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const accessToken = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://localhost:8080/books/id/${bookId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("API Response:", response.data); // Add this line to check the API response
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchBook();
  }, [bookId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching book details: {error.message}</p>;
  }

  if (!book) {
    return <p>No book data available.</p>;
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {book.bookName}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          by {book.authorName}
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <Rating name="read-only" value={parseFloat(book.rating)} readOnly />
        </Box>
        <Typography variant="body1" gutterBottom>
          {book.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Genre: {book.genre}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: ${book.price}
        </Typography>
      </Paper>
    </Container>
  );
};

export default BookDetail;
