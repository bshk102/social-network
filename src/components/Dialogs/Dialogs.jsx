import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsHTML = props.dialogsData.map(el => <DialogsItem name={el.name} id={el.id} />);
    let messagesHTML = props.messagesData.map(el => <Message message={el.message} />);

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