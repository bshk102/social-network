import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>
                {props.name}
                <img src="https://www.vippng.com/png/full/416-4161690_empty-profile-picture-blank-avatar-image-circle.png" alt=""/>               
            </NavLink>
        </div>
    );
};

export default DialogsItem;
