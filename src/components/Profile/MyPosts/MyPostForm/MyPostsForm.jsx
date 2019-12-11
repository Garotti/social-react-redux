import React from 'react';
import {Field, reduxForm} from "redux-form";

const MyPostsForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Write something"} name={"newPostText"} component={"textarea"}/>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </form>
        </div>
    );
};

export const PostReduxForm = reduxForm({form: 'post'})(MyPostsForm);

export default MyPostsForm;