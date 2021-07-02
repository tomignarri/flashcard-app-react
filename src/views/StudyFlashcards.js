import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "../components/Header";
import Flashcard from "../components/Flashcard";

function StudyFlashcards() {
  return (
    <div>
        <Header />
        
        <Flashcard />
      
    </div>
  );
};

export default StudyFlashcards;