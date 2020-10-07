import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileImage}>
                <img src="https://media.resources.festicket.com/image/412x150/smart/filters:quality(70)/www/magazine/Techno_B_qdqEYIm.jpg" />
            </div>
            <div className={s.profileInfo}>
                <div className={s.profileAvatar}>
                    <img src="https://face.bubble.ru/_nuxt/img/5501f2b.jpg" alt="avatar"/>
                </div>
                <div className={s.profileDescription}>
                    <h3 className={s.name}>Artem Kasimov</h3>
                    <h5 className={s.age}>30 years</h5>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;