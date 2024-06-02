import React from "react";
import NavBar from "../../shared/NavBar/NavBar";
import { Container } from "@mui/material";
import SearchBar from "../../shared/NavBar/SearchBar";
import RecommendationBook from "../recomdationBook/RecommendationBook";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <SearchBar></SearchBar>
        <RecommendationBook></RecommendationBook>
      </Container>
    </div>
  );
};

export default Home;
