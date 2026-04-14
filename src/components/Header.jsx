import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Header = ({ siteName, query, setQuery,onSearch  }) => {

  

  const navigate = useNavigate();

const handleEnter = (e) => {
  if (e.key === "Enter") {
    onSearch(query);   
    navigate("/Home");
  }
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
      placeholder="Search Movies"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="Searchinput"
      onKeyDown={handleEnter}
    />

        </div>
         <Link to="/watchlist" className="watchlist-btn">
          ❤️ Watchlist
        </Link>
         <Link to= "/Sign" className="sign-in-btn"> Sign In </Link>
         
      

      </div>

    </header>
  );
};

export default Header;