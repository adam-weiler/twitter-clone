import React, { useState, useEffect } from "react";
import TweetDataService from "../services/tweet";
import { Link } from "react-router-dom";

const TweetStatus = props => {
  const initialTweetState = {
    id: null,
    name: "",
    // address: {},
    // cuisine: "",
    tweets: []
  };
  const [tweet, setTweet] = useState(initialTweetState);

  const getTweet = id => {
      console.log('id ' + id)
    TweetDataService.get(id)
      .then(response => {
        setTweet(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTweet(props.match.params.id);
  }, [props.match.params.id]);

  const deleteTweet = (reviewId, index) => {
    TweetDataService.deleteTweet(reviewId, props.user.id)
      .then(response => {
        setTweet((prevState) => {
          prevState.tweets.splice(index, 1)
          return({
            ...prevState
          })
        })
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {tweet._id ? (
        <div>
          <div className="col-lg-4 pb-1">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">
                            <strong>user_id: </strong>{tweet.user_id}<br/>
                            <strong>text: </strong>{tweet.text}<br/>
                            {/* <strong>date: </strong>{formatDate(tweet.date)}<br/> */}
                            <strong>date: </strong>{tweet.date}<br/>
                            <strong>id: </strong>{tweet._id}<br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      ) : (
        <div>
          <br />
          <p>No tweet selected.</p>
        </div>
      )}
    </div>
  );
};

export default TweetStatus;