// SearchBar.jsx
import React from "react";
import "./SearchBar.css"; // Import the CSS file for styling
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="I'm looking for..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
