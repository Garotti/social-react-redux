import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import s from '../MyPosts.module.css'

export const maxLength = maxLengthCreator(255);

const MyPostsForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field class={s.postForm} placeholder={"Write something..."}
                           cols={50}
                           rows={3}
                           name={"newPostText"}
                           component={Textarea}
                           validate={[required, maxLength]}
                    />
                </div>
                <div>
                    <button className={s.buttonAddPost} >Add Post</button>
                </div>
            </form>
        </div>
    );
};

export const PostReduxForm = reduxForm({form: 'post'})(MyPostsForm);

export default MyPostsForm;