import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import data from './../../../index';

const MyPosts = (props) => {

    let postsHTML = data[2].map(el => <Post message={el.message} likesCount={el.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="20" rows="4"></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsHTML}
            </div>
        </div>
    );
};

export default MyPosts;