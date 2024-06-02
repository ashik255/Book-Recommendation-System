import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../bookcard/BookCard';
import './RecommendationBook.css'; // Ensure you have this CSS file for styling

const RecommendationBook = () => {
  const [books, setBooks] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('authToken');

    axios.get('http://localhost:8080/books/all', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      const data = response.data;
      setBooks(data);
      const userRatings = data.filter(book => book.user_id === 1); 
      const allRatings = data;
      setRecommendations(getRecommendations(userRatings, allRatings));
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  const getRecommendations = (userRatings, allRatings) => {
    const userAverage = userRatings.reduce((sum, rating) => sum + rating.rating, 0) / userRatings.length;

    const recommendations = allRatings
      .filter(rating => !userRatings.some(userRating => userRating.book_id === rating.book_id))
      .map(rating => {
        const similarity = rating.rating - userAverage;
        return { ...rating, similarity };
      });

    // Sort recommendations by rating in descending order
    recommendations.sort((a, b) => b.rating - a.rating);
    return recommendations.slice(0, 3); // Return top 3 recommendations
  };

  return (
    <div>
      <h2>Recommendation Books :</h2>
      <div className="recommendations-row">
        {recommendations.map(book => (
          <BookCard key={book.book_id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationBook;
