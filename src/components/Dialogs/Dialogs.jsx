import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsHTML = props.dialogs.dialogsData.map(el => <DialogsItem name={el.name} id={el.id} />);
    let messagesHTML = props.dialogs.messagesData.map(el => <Message message={el.message} />);

    const textMessage = React.createRef();

    const sendMessage = () => {
        console.log(textMessage.current.value);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsHTML}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesHTML}
                </div>
                <div className={s.sendMessage}>
                    <textarea ref={textMessage} cols="35" rows="4"></textarea>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;