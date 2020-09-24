import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://media.resources.festicket.com/image/412x150/smart/filters:quality(70)/www/magazine/Techno_B_qdqEYIm.jpg" />
            </div>
            <div>
                avatar + descr
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;