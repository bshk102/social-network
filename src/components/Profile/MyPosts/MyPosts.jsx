import React, { createRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsHTML = props.postsData.map(el => <Post message={el.message} likesCount={el.likesCount} />);

    const postText = React.createRef();

    const addPost = () => {
        console.log(postText.current.value);
        postText.current.value = '';
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={postText} cols="20" rows="4"></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsHTML}
            </div>
        </div>
    );
};

export default MyPosts;