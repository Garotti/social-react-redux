import React from 'react';
import s from './Post.module.css'

const Post = (props) => {


    return (
        <div className={s.item}>
            <img src="http://nevendaar.com/_ph/50/2/966772563.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    );
};

export default Post;