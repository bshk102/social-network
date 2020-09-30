import React from 'react';
import s from './FriendIcon.module.css';

const FriendIcon = (props) => {
    return (
        <div className={s.FriendIcon}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar" />
            </div>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.surname}>
                {props.surname}                
            </div>
        </div>
    );
};

export default FriendIcon;