// BookCard.js
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    // console.log(book.bookId);
    const detailUrl = book.bookId ? `/detail/${book.bookId}` : '/detail';
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {book.bookName}
                </Typography>
                <Rating name="read-only" value={book.rating} readOnly />
                <Typography variant="body2" color="text.secondary">
                    Price: ${book.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={detailUrl}>
                    <Button style={{ backgroundColor: '#37474f' }} className='text-decoration-none mt-3 w-100  border-0'>Details</Button>
                </Link>
            </CardActions>
        </Card>
    );
};
export default BookCard;
