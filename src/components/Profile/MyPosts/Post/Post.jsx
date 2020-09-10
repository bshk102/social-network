import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://face.bubble.ru/_nuxt/img/5501f2b.jpg" />
            Post1
        </div>
    );
};

export default Post;