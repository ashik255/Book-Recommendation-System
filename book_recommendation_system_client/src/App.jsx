import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import SignIn from "./pages/signIn/SignIn.jsx";
import BookCard from "./pages/bookcard/BookCard.jsx";
import BookDetail from "./pages/bookdetails/BookDetail.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/userprofile/UserProfile.jsx";
import SignUpForm from "./pages/SignUpForm/SignUpForm.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./shared/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Home></Home>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/book" element={<BookCard />} />
            <Route path="/detail/:bookId" element={<BookDetail />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
