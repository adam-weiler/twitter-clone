import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getTweets } from "./api"

export const TweetList = () => {
  // const [items, setItems] = useState([])

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const tweets = await getTweets()
  //     setItems(tweets)
  //   }
  //   fetchItems()
  // }, [])

  const items = [{"_id": 1, "text": "Hellow orld!"}, {"_id": 2, "text": "Hello World!"}];

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Tweet List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(tweet => (
                <tr key={tweet._id}>
                  <td>
                    {tweet.text}
                  </td>
                  <td>
                    <Link to={`/edit/${tweet._id}`}>Edit</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};