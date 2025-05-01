// src/components/JobListings/SearchBar.jsx

import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for jobs..." />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;  
