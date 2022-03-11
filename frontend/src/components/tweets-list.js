import React, { useState, useEffect } from "react";
import TweetDataService from "../services/tweet";
import { Link } from 'react-router-dom'
// import { getTweets } from "./api"

const TweetsList = props => {
  // Use React Hooks to set state variables.
  const [tweets, setTweets] = useState([]);

  useEffect(() => { // This tells our component needs to do something after rendering.
    retrieveTweets();
  }, []);

  const retrieveTweets = () => {
    TweetDataService.getAll() // Retrieve all the tweet data.
      .then(response => {
        console.log(response.data);
        setTweets(response.data.tweets);  // This goes into the tweets' state.
      })
      .catch(e => {
        console.log(e);
      });
  };

   const refreshList = () => {
    retrieveTweets();
  };

  return (
    <div>
      <div className="row">
        {tweets.map((tweet) => {
          return (
            <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">user_id: {tweet.user_id}</h5>
                  <p className="card-text">
                  <strong>text: </strong>{tweet.text}<br />
                    <strong>date: </strong>{tweet.date}<br />
                    <strong>_id: </strong>{tweet._id}<br />
                    
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TweetsList;