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
      <div className="row pb-1">


        <div className="input-group col-lg-4">
          
        </div>

        <div className="input-group col-lg-4">

          
        </div>
      </div>

      <div className="row">
        {/* {tweets.map((tweet) => {
          const address = `${tweet.address.building} ${tweet.address.street}, ${tweet.address.zipcode}`;  // Concat the address into a single variable.
          return (
            <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{tweet.name}</h5>
                  <p className="card-text">
                    <strong>Cuisine: </strong>e<br />
                    <strong>Address: </strong>b
                  </p>
                  <div className="row">
                    <Link to={"/tweets/"+tweet._id} className="btn btn-primary col-lg-5 mx-1 mb-1" >
                      View Reviews
                    </Link>
                    <a target="_blank" href={"https://www.google.com/maps/place/" + address} className="btn btn-primary col-lg-5 mx-1 mb-1">View Map</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default TweetsList;