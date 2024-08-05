import React from "react";
import "./Header.scss";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />

      <div className="nav-links">
        <Link to="/">TV Shows</Link>
        <Link to="/">Movies</Link>
        <Link to="/">Recently Added</Link>
        <Link to="/">My List</Link>
      </div>

      <ImSearch className="search-icon" />
    </nav>
  );
};

export default Header;
