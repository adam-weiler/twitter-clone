import React from 'react';
import { 
  BrowserRouter,
  Routes, 
  Route,
  Link
} from "react-router-dom";
import { TweetList } from './TweetList';
import { CreateTweet } from './CreateTweet';


// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar bg-light navbar-expand-lg navbar-light">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Tweets</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Tweet</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TweetList />} />
          {/* <Route path="/edit/:id" element={EditTodo} /> */}
          <Route path="/create" element={<CreateTweet />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
