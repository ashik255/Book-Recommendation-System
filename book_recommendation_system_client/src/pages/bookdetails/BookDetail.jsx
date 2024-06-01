// BookDetail.js
import React from 'react';
import { Container, Paper, Typography, Box, Rating } from '@mui/material';
import { useParams } from 'react-router-dom';

const BookDetail = ({ book }) => {
    console.log(book);
    // const { id } = useParams();
//   console.log("hii":book);
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
                    <Rating name="read-only" value={book.rating} readOnly />
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
