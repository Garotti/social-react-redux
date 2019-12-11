import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostReduxForm} from "./MyPostForm/MyPostsForm";

const MyPosts = (props) => {
    const postsData = props.posts.map( post => {
        return(
            <Post message={post.message} like={post.likeCount}/>
        )
    });

    const onSubmit = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={s.postsBlock}>
            My pots
            <div>
                <PostReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {postsData}
            </div>
        </div>
    );
};

export default MyPosts;