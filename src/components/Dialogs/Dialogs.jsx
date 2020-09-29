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

    let dialogsData = [
        {name: 'Artem', id: 0},
        {name: 'Sveta', id: 1},
        {name: 'Dima', id: 2},
        {name: 'Aza', id: 3},
        {name: 'Kolya', id: 4},
        {name: 'Ivan', id: 5}
    ];

    let messagesData = [
        {message: 'Hi', id: 0},
        {message: 'React JS??', id: 1},
        {message: 'hello bro!', id: 2},
        {message: 'yo', id: 3},
        {message: 'yo!', id: 4}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    );
};

export default Dialogs;