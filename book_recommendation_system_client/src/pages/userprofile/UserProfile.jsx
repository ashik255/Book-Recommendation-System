import React, { useEffect, useState } from 'react';
import UserService from './UserService';
// import UserService from '../services/UserService';

const UserProfile = () => {
  const [searchHistory, setSearchHistory] = useState([]);

//   useEffect(() => {
//     UserService.getSearchHistory().then(response => {
//       setSearchHistory(response.data);
//     }).catch(error => {
//       console.error('There was an error retrieving the search history!', error);
//     });
//   }, []);

  return (
    <div>
      <h2>User Profile</h2>
      <h3>Search History</h3>
      <ul>
        {searchHistory.map((history, index) => (
          <li key={index}>{history.query}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
