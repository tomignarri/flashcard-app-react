import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home';
import StudyFlashcards from './views/StudyFlashcards';
import React, {useState} from "react";

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/study' exact={true} component={StudyFlashcards}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
