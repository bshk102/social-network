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

    let dialogsHTML = dialogsData.map(el => <DialogsItem name={el.name} id={el.id} />);
    let messagesHTML = messagesData.map(el => <Message message={el.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsHTML}
            </div>
            <div className={s.messages}>
                {messagesHTML}
            </div>
        </div>
    );
};

export default Dialogs;