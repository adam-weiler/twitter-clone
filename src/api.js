// import { useState, useEffect } from 'react';

// function GetData() {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         // Only needs to fetch '/home' because of proxy.
//         fetch("/home")
//         .then(res => res.json())
//         .then(data => setData(data))
//     }, [])

//     return (
//         <div>
//             <div>{data.name}</div>
//             <div>{data.age}</div>
//         </div>
//     );
// }


// import { useState, useEffect } from 'react';

// function GetData() {
//     const formInfo = {
//         username: "Bill123",
//         password: "mypassword"
//     }

//     useEffect(() => {
//         fetch("/home", {
//             method: "POST",
//             headers: {
//                 'Content-type': "application/json"
//             },
//             body: JSON.stringify(formInfo)
//         })
//         .then(res => res.json())
//         .then(data => console.log(data))
//     }, [])
// }

export const getTweets = () => fetch("http://localhost:4000/").then(res => res.json())

export const createTweet = (tweet) => fetch("http://localhost:4000/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(tweet)
})  

export const updateTweet = (tweet, id) => fetch(`http://localhost:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(tweet)
})  

export const getTweet = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())