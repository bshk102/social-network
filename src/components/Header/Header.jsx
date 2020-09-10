import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={`${s.header} header`}>
            <img src="https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png" />
        </header>
    );
};

export default Header;