import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "../components/Header";
import HomePageCards from "../components/HomePageCards";

function Home() {
  return (
    <div>
        <Header />
        <div className="homePageContent">
            
            <HomePageCards name="Make a New Deck" />
            <HomePageCards name="Your Decks" />
            <HomePageCards name="Study"/>

        </div>
    </div>
  );
};

export default Home;