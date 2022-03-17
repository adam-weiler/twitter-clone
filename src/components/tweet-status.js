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
      {tweet ? (
        <div>
          <h5>Name{tweet.name}</h5>
          <h5>ID {tweet.id}</h5>
          <h5>user_id: {tweet.user_id}</h5>
          {/* <h4>{props}</h4> */}
          <p>
            {/* <strong>Cuisine: </strong>{tweet.cuisine}<br/> */}
            {/* <strong>Address: </strong>{tweet.address.building} {tweet.address.street}, {tweet.address.zipcode} */}
          </p>
          {/* <Link to={"/tweets/" + props.match.params.id + "/review"} className="btn btn-primary"> */}
            {/* Add Tweet */}
          {/* </Link> */}
          <h4> Tweets </h4>
          <div className="row">
              Hello
            {/* {tweet.tweets.length > 0 ? (
             tweet.tweets.map((review, index) => {
               return (
                 <div className="col-lg-4 pb-1" key={index}>
                   <div className="card">
                     <div className="card-body">
                       <p className="card-text">
                         {review.text}<br/>
                         <strong>User: </strong>{review.name}<br/>
                         <strong>Date: </strong>{review.date}
                       </p>
                       {props.user && props.user.id === review.user_id &&
                          <div className="row">
                            <a onClick={() => deleteTweet(review._id, index)} className="btn btn-primary col-lg-5 mx-1 mb-1">Delete</a>
                            <Link to={{
                              pathname: "/tweets/" + props.match.params.id + "/review",
                              state: {
                                currentTweet: review
                              }
                            }} className="btn btn-primary col-lg-5 mx-1 mb-1">Edit</Link>
                          </div>                   
                       }
                     </div>
                   </div>
                 </div>
               );
             }) */}
            ) : (
            <div className="col-sm-4">
              <p>404: This tweet does not exist.</p>
            </div>
            )}

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