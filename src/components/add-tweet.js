import React, { useState } from "react";
import TweetDataService from "../services/tweet";
import { Link } from "react-router-dom";

const AddTweet = props => {
  let initialTweetState = ""

  let editing = false;

  if (props.location.state && props.location.state.currentTweet) {
    editing = true;
    initialTweetState = props.location.state.currentTweet.text
  }

  const [tweet, setTweet] = useState(initialTweetState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    setTweet(event.target.value);
  };

  const saveTweet = () => {
    var data = {
      text: tweet,
      name: props.user.name,
      user_id: props.user.id,
    //   tweet_id: props.match.params.id
    };

    if (editing) {
      data.tweet_id = props.location.state.currentTweet._id
      TweetDataService.updateTweet(data)
        .then(response => {
          setSubmitted(true);
          // console.log("EDITING " + response.data);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      TweetDataService.createTweet(data)
        .then(response => {
          setSubmitted(true);
          console.log("NOT EDITING, creating new" + response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      {props.user ? (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You posted successfully!</h4>
            <Link to={"/status/" + props.location.state.currentTweet._id} className="btn btn-success">
              Back to Tweet
            </Link>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="description">{ editing ? "Edit" : "Create" } Tweet</label>
              <input
                type="text"
                className="form-control"
                id="text"
                required
                value={tweet}
                onChange={handleInputChange}
                name="text"
              />
            </div>
            <button onClick={saveTweet} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>

      ) : (
      <div>
        Please log in.
      </div>
      )}

    </div>
  );
};

export default AddTweet;