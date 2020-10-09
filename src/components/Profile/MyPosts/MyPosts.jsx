import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addNewPostActionCreator, inputPostTextActionCreator} from './../../../redux/store'

const MyPosts = (props) => {

    let postsHTML = props.postsData.map(el => <Post message={el.message} likesCount={el.likesCount} />);

    const userInput = React.createRef();

    const add = () => {
        props.dispatch(addNewPostActionCreator());
    };

    const textareaValueChange = () => {
        props.dispatch(inputPostTextActionCreator(userInput.current.value));
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={userInput} cols="20" rows="4" onChange={textareaValueChange} value={props.textareaValue} />
                <button onClick={add}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsHTML}
            </div>
        </div>
    );
};

export default MyPosts;