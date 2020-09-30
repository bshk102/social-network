import React from 'react';
import s from './NavbarFriends.module.css';

const NavbarFriends = (props) => {
    
    let avatar;

    if (props.avatar == '') {
        avatar = 'https://www.vippng.com/png/full/416-4161690_empty-profile-picture-blank-avatar-image-circle.png'
    } else {
        avatar = props.avatar;
    }

    return (
        <div className={s.NavbarFriends}>
            <div className={s.friend}>
                <img src={avatar} alt={props.name} title={props.name} />
            </div>
        </div>
    );
};

export default NavbarFriends;