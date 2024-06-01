import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import NavBar from './shared/NavBar/NavBar.jsx';
import SignIn from './pages/signIn/SignIn.jsx';
import BookCard from './pages/bookcard/BookCard.jsx';
import { Container, Switch } from '@mui/material';
import BookDetail from './pages/bookdetails/BookDetail.jsx';
import SearchBar from './shared/NavBar/SearchBar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './pages/userprofile/UserProfile.jsx';
import SignUpForm from './pages/SignUpForm/SignUpForm.jsx';
// import UserProfile from './pages/userprofile/UserProfile.jsx';

function App() {
  return (
    <div className="App">

<Router>
      <div className="App">
        <NavBar />
        {/* <BookCard/> */}
        {/* <UserProfile /> */}
        <Routes>
          {/* <Route exact path="/" component={BookList} /> Adjust as needed */}
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUpForm/>} />
          {/* <BookCard/> */}
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/book" element={<BookCard/>} />
          <Route path="/detail/:bookId" element={<BookDetail/>} />
        </Routes>
      </div>
      
    </Router>
    {/* <BookCard></BookCard> */}
    </div>
  );
}

export default App;
