import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const TweetForm = ({ tweet, onSubmit }) => {
    const { register, handleSubmit } = useForm({ 
        defaultValues: { text: tweet ? tweet.text : "" },
    });

    const submitHandler = handleSubmit((data) => {   //When the user hits the 'Create Tweet' button.
        onSubmit(data);
    });

    return(
        // <form>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">
                    Text:
                </label>
                {/* <input className="form-control" ref={register} type="text" name="text" id="text" /> */}
                {/* <input className="form-control" ref={register} type="number" name="user" id="user" /> */}
            </div>
            <div className="form-group">
                <button className="btn btn-primary">
                    Save Tweet
                </button>
            </div>
        </form>
    );
}