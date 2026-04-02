import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Sign from "./Sign";
import Home from "./Home";

const Header = ({ siteName }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log("Searching:", e.target.value);
  };

  return (
    <header className="navbar">

      <div className="navbar-left">

        <div className="logo">
          <span className="logo-icon">▶</span>
          {siteName}
        </div>

        <nav className="nav-links">
          <Link to="/Home">Home</Link>
          <Link to="/New">New</Link>
          <Link to="/Popular" className="active">Popular</Link>
          <Link to="/List">Lists</Link>
        </nav>

      </div>

      <div className="navbar-right">

        <div className="search-container">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearch}
          />

        </div>
        
         <Link to= "/Sign" className="sign-in-btn"> Sign In </Link>
         
      

      </div>

    </header>
  );
};

export default Header;