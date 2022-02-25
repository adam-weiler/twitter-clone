import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from "react-router-dom";


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar bg-light navbar-expand-lg navbar-light">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
              {/* <Link to="/tweet" className="nav-link">Create Tweet</Link> */}
            </li>
            <li className="navbar-item">
              {/* <Link to="/profile" className="nav-link">Profile</Link> */}
            </li>
            <li className="navbar-item">
              <Link to="/register" className="nav-link">Create Account</Link>
            </li>
            <li className="navbar-item">
              {/* <Link to="/login" className="nav-link">Login</Link> */}
            </li>
            <li className="navbar-item">
              {/* <Link to="/logout" className="nav-link">Logout</Link> */}
            </li>
          </ul>
        </nav>
      </div>
      </Router>
  );
}

export default App;
