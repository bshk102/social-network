import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Artem" id="0" />
                <DialogsItem name="Sveta" id="1" />
                <DialogsItem name="Dima" id="2" />
                <DialogsItem name="Aza" id="3" />
                <DialogsItem name="Kolya" id="4" />
                <DialogsItem name="Ivan" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="React JS??" />
                <Message message="hello bro!" />
            </div>
        </div>
    );
};

export default Dialogs;