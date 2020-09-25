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
            <div className={s.postImg}>
                <img src="https://face.bubble.ru/_nuxt/img/5501f2b.jpg" />
            </div>
            <div className="postMessage">
                {props.message}
            </div>
            <span>
                {props.likesCount} {likesText}                
            </span>
        </div>
    );
};

export default Post;