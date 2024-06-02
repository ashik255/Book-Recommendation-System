import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
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
        <Button
          sx={{ marginLeft: "auto" }}
          component={Link}
          to={`/detail/${book.bookId}`}
          variant="contained"
          color="primary"
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
