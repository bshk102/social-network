import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import NavbarFriends from './NavbarFriends/NavbarFriends';

const Navbar = (props) => {

    let randomFriends = props.friends.sort(() => {
        return Math.random() - 0.5;
    });

    let randomFriendsDraw = [];

    for (let i=0; i<3; i++) {
        randomFriendsDraw.push(
            <NavbarFriends 
                name={randomFriends[i].name} avatar={randomFriends[i].avatar} friends={props.friends}
                className={s.randomFriends} 
            />
        );
    }

    return (
        <nav className={`${s.nav} nav`}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.friends}`}>
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
            </div>
            <div className={s.randomFriends}>
                {randomFriendsDraw}
            </div>
        </nav>
    );
};

export default Navbar;