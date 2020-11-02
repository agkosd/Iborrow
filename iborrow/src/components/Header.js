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
        <Link className="item"><h3>List Item</h3></Link>
        <Link className="item"><h3>Search Item</h3></Link>
        <GoogleAuth/>
      </div>
    </div>
  );
};

export default Header;
