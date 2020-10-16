const SEND_MESSAGE = 'SEND-MESSAGE',
    INPUT_MESSAGE = 'INPUT-MESSAGE';

const dialogsReducer = (state, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: state.textareaValue,
                id: state.messagesData.length
            };
            state.messagesData.push(newMessage);
            state.textareaValue = '';
            break;
        case INPUT_MESSAGE:
            state.textareaValue = action.message;
            break;
    }

    return state;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const inputMessageActionCreator = (text) => ({type: INPUT_MESSAGE, message: text});

export default dialogsReducer;