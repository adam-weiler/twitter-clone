import React, { useState, useEffect } from "react";
import TweetDataService from "../services/tweet";
import { Link } from 'react-router-dom'
// import { getTweets } from "./api"

const TweetsList = props => {
  const initialTweetState = {
    id: null,
    name: "",
    address: {},
    cuisine: "",
    tweets: []
  }
  // const [tweet, setTweet] = useState(initialTweetState); // By default all these fields are empty.



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
  
  const deleteTweet = (tweetId, index) => {
    TweetDataService.deleteTweet(tweetId, props.user.id)
      .then(response => {
        setTweets((prevState) => {
          prevState.tweets.splice(index, 1)  // If you delete a tweet, it removes it from the state and from the page.
          return({
            ...prevState
          })
        })
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div>
      <div className="row">
        {/* Are you logged in: {props.user.id} */}

        {tweets.map((tweet, index) => {
          return (
            <div className="col-lg-4 pb-1" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">user_id: {tweet.user_id}</h5>
                  <p className="card-text">
                  <strong>text: </strong>{tweet.text}<br />
                    <strong>date: </strong>{tweet.date}<br />
                    <strong>_id: </strong>{tweet._id}<br />
                    {props.user && props.user.id === tweet.user_id &&  // Checks if user is logged in, and if user's id is the same as the tweet's id. The last && isn't a mistake but saying to use the following code.
                      <span className="row">
                        <Link to={{
                          pathname: "/tweets/" + tweet._id,
                          state: {
                            currentTweet: tweet
                          }
                        }} className="btn btn-primary col-lg-5 mx-1 mb-1">Edit</Link>



                        
                        <a onClick={() => deleteTweet(tweet._id, index)} className="btn btn-primary col-lg-5 mx-1 mb-1">Delete</a>
                      </span>
                    }
                    <strong>Link to Tweet:</strong> <Link to={"/status/"+tweet._id} className="btn btn-primary col-lg-5 mx-1 mb-1">View</Link>
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