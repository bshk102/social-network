import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileImage}>
                <img src="https://media.resources.festicket.com/image/412x150/smart/filters:quality(70)/www/magazine/Techno_B_qdqEYIm.jpg" />
            </div>
            <div>
                avatar + descr
            </div>
        </div>
    );
};

export default ProfileInfo;