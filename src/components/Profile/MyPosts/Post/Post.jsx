import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    let likesText = '';

    if (props.likesCount == 1) {
        likesText = 'like';
    } else {
        likesText = 'likes';
    }

    return (
        <div className={s.item}>
            <img src="https://face.bubble.ru/_nuxt/img/5501f2b.jpg" />
            {props.message}
            <span>
                {props.likesCount} {likesText}                
            </span>
        </div>
    );
};

export default Post;