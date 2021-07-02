import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Login from "./Login";

function Header() {
    
return (
    <header>
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/study">Study</Link>
            <Login />
        </div>
    </header>
  );
};

export default Header;