const ADD_NEW_POST = 'ADD-NEW-POST',
    INPUT_POST_TEXT = 'INPUT-POST-TEXT';

const profileReducer = (state, action) => {

    switch(action.type) {
        case ADD_NEW_POST:
            let newPost = {
                message: state.textareaValue,
                likesCount: 0
            };
            state.postsData.unshift(newPost);
            state.textareaValue = '';
            break;
        case INPUT_POST_TEXT:
            state.textareaValue = action.inputText;
            break;
    }

    return state;
}

export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});
export const inputPostTextActionCreator = (text) => ({type: INPUT_POST_TEXT, inputText: text});

export default profileReducer;