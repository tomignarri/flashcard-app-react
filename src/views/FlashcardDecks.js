import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function FlashcardDecks() {
  return (
    <div>
      <Link to="/studyFlashcards">Study</Link>
    </div>
  );
};

export default FlashcardDecks;