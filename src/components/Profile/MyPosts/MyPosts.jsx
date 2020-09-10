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
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;