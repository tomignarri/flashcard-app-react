import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <header>
      
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/study">Study</Link>
        <div>React Login</div>
      </div>
    </header>
    
  );
};

export default Header;