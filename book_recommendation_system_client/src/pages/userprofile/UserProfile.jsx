import React, { useEffect, useState } from "react";
import UserService from "./UserService";
// import UserService from '../services/UserService';

const UserProfile = () => {
  const [searchHistory, setSearchHistory] = useState([]);

  // useEffect(() => {
  //   UserService.getSearchHistory().then(response => {
  //     setSearchHistory(response.data);
  //   }).catch(error => {
  //     console.error('There was an error retrieving the search history!', error);
  //   });
  // }, []);

  return (
    <div>
      <h2>User Profile:</h2>
      --------------------- <br />
      <h3>Search History:</h3>
    </div>
  );
};

export default UserProfile;
