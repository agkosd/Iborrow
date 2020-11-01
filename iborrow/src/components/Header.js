import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <h2>Iborrow App</h2>
      </Link>

      <div className="right menu">
        <Link>Link to ..</Link>
        <GoogleAuth/>
      </div>
    </div>
  );
};

export default Header;
