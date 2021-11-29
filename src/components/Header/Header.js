import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../commom/images/logo.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="title">
        <Link to="/">
          <p>Movie App</p>
        </Link>
      </div>
      <div className="user-logo">
        <img src={logo} alt="user"></img>
      </div>
    </div>
  );
};

export default Header;
