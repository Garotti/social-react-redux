import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

export const maxLength = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Write something"}
                           name={"newPostText"}
                           component={Textarea}
                           validate={[required, maxLength]}
                    />
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