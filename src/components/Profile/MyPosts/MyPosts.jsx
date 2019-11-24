import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsData = props.posts.map( post => {
        return(
            <Post message={post.message} like={post.likeCount}/>
        )
    });

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={s.postsBlock}>
            My pots
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}
                          cols="50" rows="5"
                /><br/>
                <button onClick={onAddPost} className={s.post_but}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsData}
            </div>
        </div>
    );
};

export default MyPosts;