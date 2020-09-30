import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={`${s.header} header`}>
            <a href="/">
                <img src="https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png" />
            </a>
        </header>
    );
};

export default Header;