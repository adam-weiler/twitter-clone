import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* BrowserRouter is a Router that uses HTML5 history API (pushState, replaceState, and popstate event) to keep UI in sync with the URL. */}
    {/* It's used for doing client-side routing with URL segments. */}
    {/* It allows single-page app to feel more like a traditional app. */}
    {/* It also makes it easier to share links to a specific page in the app. */}
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
