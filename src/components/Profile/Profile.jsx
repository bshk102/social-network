import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts 
                postsData={props.profile.postsData} 
                addNewPost={props.addNewPost} 
                textareaValue={props.profile.textareaValue} 
                inputPostText={props.inputPostText} 
            />
        </div>
    );
};

export default Profile;