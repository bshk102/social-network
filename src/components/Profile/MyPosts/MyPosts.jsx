import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div>
            my posts
            <div>
                <textarea name="" id="" cols="20" rows="4"></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message='YOYO' likesCount='0' />
                <Post message='Hi, how are you' likesCount='15' />
                <Post message="it's my first post" likesCount='20' />
                <Post message="check check" likesCount='1' />
            </div>
        </div>
    );
};

export default MyPosts;