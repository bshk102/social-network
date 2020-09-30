import React from 'react';
import s from './NavbarFriends.module.css';

const NavbarFriends = (props) => {

    let randomFriends = [
        Math.floor(Math.random()*props.friends.length),
        Math.floor(Math.random()*props.friends.length),
        Math.floor(Math.random()*props.friends.length)
    ];

    console.log(randomFriends);

    return (
        <div className={s.NavbarFriends}>
            <div className={s.friend}>
                <img src={props.avatar} alt={props.name} title={props.name} />
            </div>
        </div>
    );
};

export default NavbarFriends;