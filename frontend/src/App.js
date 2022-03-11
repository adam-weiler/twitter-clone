import React from "react";
// import { Switch, Route, Link } from "react-router-dom"; // Using different routes to connect to different react routes.
import { Switch, Route, Link } from "react-router-dom"; // Using different routes to connect to different react routes.
import "bootstrap/dist/css/bootstrap.min.css";  // Bootstrap.

// import AddReview from "./components/add-review";
// import Tweet from "./components/tweets";
import TweetsList from "./components/tweets-list";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null); // This is a React Hook. 
  // React.useState is a way to create a state variable that can be used within the React app.
  // By default it is null.
  // setUser is a function we can use to update the user variable.

  async function login(user = null) { // Pass in the user but default to null.
    setUser(user);  // Call the React Hook and set user to the passed in 'user' value.
  }

  async function logout() {
    setUser(null);  // Call the React Hook and set the user to null.
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tweets" className="navbar-brand">
          Tweet Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tweets"} className="nav-link">
              Tweets
            </Link>
          </li>
          <li className="nav-item">
            { user ? (  // If user is logged in.
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name} {user.id}
              </a>
            ) : ( // Otherwise show link to log in.
              <Link to={"login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route 
            exact path={["/", "/tweets"]} 
            render={(props) => (
              <TweetsList {...props} user={user} />  // Pass in the login() to login.js.
            )}
          />  {/* Loading the component. */}
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />  // Pass in the login() to login.js.
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;