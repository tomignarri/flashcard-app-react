import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Login";

function Header() {

const [token, setToken] = useState();  
    
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