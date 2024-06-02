import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import { Container } from '@mui/material';
import { Search } from '@mui/icons-material';
import SearchBar from '../../shared/NavBar/SearchBar';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <SearchBar></SearchBar>
            </Container>
        </div>
    );
};

export default Home;