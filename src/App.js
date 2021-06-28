import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact={true} component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
