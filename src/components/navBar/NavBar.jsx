// Navbar.jsx
import React from "react";
import "./NavBar.css"; // Import the CSS file for styling
import { FaBars, FaClock } from "react-icons/fa"; // Importing icons from react-icons
import { IoIosArrowDown } from "react-icons/io"; // Importing the down arrow icon
import { GoClock } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side: Menu Items */}
      <div className="navbar-left">
        <div className="navbar-item">
          <FaBars className="menu-icon" />
          <span>All Departments</span>
          <IoIosArrowDown className="dropdown-icon" />
        </div>
        <div className="navbar-links">
          <span className="navbar-link">
            Home <IoIosArrowDown className="dropdown-icon" />
          </span>
          <span className="navbar-link">
            Shop <IoIosArrowDown className="dropdown-icon" />
          </span>
          <span className="navbar-link">
            Product <IoIosArrowDown className="dropdown-icon" />
          </span>
          <span className="navbar-link">
            Blog <IoIosArrowDown className="dropdown-icon" />
          </span>
          <span className="navbar-link">
            Page <IoIosArrowDown className="dropdown-icon" />
          </span>
          <span className="navbar-link sale-link">
            Sale <span className="hot-badge">HOT</span>
          </span>
          <span className="navbar-link">Buy Umino!</span>
        </div>
      </div>

      {/* Right Side: Recently Viewed Products */}
      <div className="navbar-right">
        <GoClock className="recently-viewed-icon" />
        <span className="recently-viewed-text">Recently viewed products</span>
      </div>
    </nav>
  );
};

export default Navbar;
