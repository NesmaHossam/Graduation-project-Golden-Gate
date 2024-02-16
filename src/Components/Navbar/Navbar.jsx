import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Assests/logo.png";
import bx_cart from "../Assests/bx_cart.png";
import { Link, link } from "react-router-dom";

import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResultslist } from "../SearchResultslist/SearchResultslist";

const Navbar = () => {
  // searchbar
  const [results, setResults] = useState([]);

  //   api
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("categories");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/categories">
            Categories
          </Link>
          {menu === "categories" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("aboutus");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/aboutus">
            About Us
          </Link>
          {menu === "aboutus" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultslist results={results} />
      </div>

      <div className="nav-login-cart">
        <Link to="/cart">
          <img src={bx_cart} alt=""/>
        </Link>

        <Link to="/login">
          <button className="login-btn">LOGIN</button>
        </Link>
        <Link to="/signup">
          <button className="signup-btn">SIGN UP</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
