import React, { useState, useEffect } from "react";
import TweetDataService from "../services/tweet";
import { Link } from 'react-router-dom'
// import { getTweets } from "./api"

const TweetsList = props => {
  // const initialTweetState = {
    // id: null,
    // name: "",
    // address: {},
    // cuisine: "",
    // tweets: []
  // }
  // const [tweet, setTweet] = useState(initialTweetState); // By default all these fields are empty.



  // Use React Hooks to set state variables.
  const [tweets, setTweets] = useState([]);

  useEffect(() => { // This tells our component needs to do something after rendering.
    retrieveTweets();
  }, []);

  const retrieveTweets = () => {
    TweetDataService.getAll() // Retrieve all the tweet data.
      .then(response => {
        // console.log(response.data);


        // let sortedData = sortData(response.data.tweets);
        // let sortedData = response.data.tweets.sort ((a, b) => a.Date.localeCompare(b.Date));
       


        // let sortedData = response.data.tweets;
        // sortedData = sortedData.sort((a, b) => b.date > a.date ? 1 : -1);   // Reorders the json to put the newest ones at the top of the list.

        let sortedData = sortData(response.data.tweets);   // Reorders the json to put the newest ones at the top of the list.
        


        // setTweets(response.data.tweets);  // This goes into the tweets' state.
        setTweets(sortedData);  // This goes into the tweets' state.
      })
      .catch(e => {
        console.log(e);
      });
  };

  const sortData = (data) => {
    // data = data.sort
    return data.sort((a, b) => b.date > a.date ? 1 : -1);
  }

   const refreshList = () => {
    retrieveTweets();
  };
  
  const deleteTweet = (tweetId, index) => {
    console.log(tweetId)
    console.log(index)
    // console.log(prevState)
    // console.log(prevState.tweets)

    

    TweetDataService.deleteTweet(tweetId, props.user.id)
      .then(response => {
        console.log("apple")

        
        // setTweets((prevState) => {
        //   console.log("ban")
        //   prevState.tweets.splice(index, 1)  // If you delete a tweet, it removes it from the state and from the page.
        //   console.log("cran")
        //   return({
        //     ...prevState
        //   })
        // })
        refreshList();
      })
      .catch(e => {
        console.log(e);
      })
  }

  const formatDate = (str) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(str).toLocaleTimeString([],options);
  }

  return (
    <div>
      <div className="row">
        {/* Are you logged in: {props.user.id} */}



        


        {tweets.map((tweet, index) => {

          // console.log(tweets)

          return (
            <div className="col-lg-4 pb-1" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">user_id: {tweet.user_id}</h5>
                  <p className="card-text">
                  <strong>text: </strong>{tweet.text}<br />
                    <strong>date: </strong>{formatDate(tweet.date)}<br />
                    <strong>_id: </strong>{tweet._id}<br />
                    {props.user && props.user.id === tweet.user_id &&  // Checks if user is logged in, and if user's id is the same as the tweet's id. The last && isn't a mistake but saying to use the following code.
                      <span className="row">
                        <Link to={{
                          pathname: "/edit/" + tweet._id,
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