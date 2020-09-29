import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsData = [
        {message: 'YOYOgdrgdfgdfgdg dfgfdhjgfdhjghdfjghdjf dfghdkjhgjdhgjdfhg djghjdhgkjdfhg lorem sdvkjsdkvsdkvksdnvsdnvjsdvjsdnvjsdnvjsdndvsnsudhvisduvhsdnvsd',
        likesCount: 0},
        {message: 'Hi, how are you', likesCount: 15},
        {message: 'it\'s my first post', likesCount: 20},
        {message: 'check check', likesCount: 1},
        {message: 'check check', likesCount: 2}
    ];

    let postsHTML = postsData.map(el => <Post message={el.message} likesCount={el.likesCount} />);

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