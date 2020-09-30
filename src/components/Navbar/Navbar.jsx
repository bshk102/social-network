import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import NavbarFriends from './NavbarFriends/NavbarFriends';

const Navbar = (props) => {

    let randomFriends = props.friends.sort(() => {
        return Math.random() - 0.5;
    });

    console.log(randomFriends);

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
            <NavbarFriends 
                name={randomFriends[0].name} avatar={randomFriends[0].avatar} friends={props.friends}
                className={s.randomFriends} 
            />
            <NavbarFriends 
                name={randomFriends[1].name} avatar={randomFriends[1].avatar} friends={props.friends}
                className={s.randomFriends} 
            />
            <NavbarFriends 
                name={randomFriends[2].name} avatar={randomFriends[2].avatar} friends={props.friends}
                className={s.randomFriends} 
            />
        </nav>
    );
};

export default Navbar;