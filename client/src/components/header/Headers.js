import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <nav className="z-depth-0">
        <div className="nav-wrapper">
          <Link
            to="/"
            className="left brand-logo"
            style={{ left: "390px", color: "black" }}
          ><img src="https://i.pinimg.com/originals/17/de/38/17de386c942658bc6567173a868c51a8.jpg" width="60" height="60"></img>
            URL Shortener - Python Project
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
