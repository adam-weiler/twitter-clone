import React, { useRef } from 'react';
// import { TweetForm } from "./TweetForm";
// import { createTweet } from "./api";
// import { useNavigate } from "react-router-dom";

export const CreateTweet = () => {
    // const navigate = useNavigate();

    // const onSubmit = async (data) => {   //When the user hits the 'Create Tweet' button.
        //alert(JSON.stringify(data));    //Alert pops up with user input.
    //     await createTweet(data);
    //     navigate("/");
    // };

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Create Tweet Item</h3>
                {/* <TweetForm onSubmit={onSubmit} /> */}
            </div>
        </div>
    );
}