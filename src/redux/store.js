let store = {
    _state: {
        profile: {
            postsData: [
                {message: 'YOYOgdrgdfgdfgdg dfgfdhjgfdhjghdfjghdjf dfghdkjhgjdhgjdfhg djghjdhgkjdfhg lorem sdvkjsdkvsdkvksdnvsdnvjsdvjsdnvjsdnvjsdndvsnsudhvisduvhsdnvsd',
                likesCount: 0},
                {message: 'Hi, how are you', likesCount: 15},
                {message: 'it\'s my first post', likesCount: 20},
                {message: 'check check', likesCount: 1},
                {message: 'check check', likesCount: 2} 
            ],
            textareaValue: ''
        },
        dialogs: {
            dialogsData: [
                {name: 'Artem', id: 0},
                {name: 'Sveta', id: 1},
                {name: 'Dima', id: 2},
                {name: 'Aza', id: 3},
                {name: 'Kolya', id: 4},
                {name: 'Ivan', id: 5}
            ],
            messagesData: [
                {message: 'Hi', id: 0},
                {message: 'React JS??', id: 1},
                {message: 'hello bro!', id: 2},
                {message: 'yo', id: 3},
                {message: 'yo!', id: 4}
            ],
            textareaValue: ''
        },
        friends: [
            {name: 'Artem', surname: 'Kasimov', avatar: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106240903_275098976938635_5002446073382884495_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_ohc=Iss_ChChLLQAX97Kr86&oh=f89b528666b7add4f1343fc20e186198&oe=5F9FBED3'},
            {name: 'Sveta', surname: 'Ivanova', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiKJyFeAfSJlqFcqb-OKi80dG0I-AFllAanA&usqp=CAU'},
            {name: 'Petr', surname: 'vasiliev', avatar: ''},
            {name: 'Oleg', surname: 'Petrov', avatar: 'https://sun9-20.userapi.com/koxqfZVKsiKmmWsvhjgYz6q9cn_LY-I8GgDpaA/XvsweoPysu0.jpg'},
            {name: 'Arhur', surname: 'Rogov', avatar: ''},
            {name: 'Viktoria', surname: 'Sokolova', avatar: 'https://www.magfree.net/uploads/posts/2018-07/1532866082053_Victoria_Sokolova_-_Vladimir_Nikolaev_Photoshoot.jpg'}
        ],
    },

    getState() {
        return this._state;
    },

    _callSubscriber(){},

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _sendMessage() {
        let newMessage = {
            message: this._state.dialogs.textareaValue,
            id: this._state.dialogs.messagesData.length
        };
        this._state.dialogs.messagesData.push(newMessage);
        this._state.dialogs.textareaValue = '';
        this._callSubscriber(this._state);
    },

    _inputMessage(message) {
        this._state.dialogs.textareaValue = message;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        switch(action.type) {
            case 'ADD-NEW-POST':
                let newPost = {
                    message: this._state.profile.textareaValue,
                    likesCount: 0
                };
                this._state.profile.postsData.unshift(newPost);
                this._state.profile.textareaValue = '';
                this._callSubscriber(this._state);
                break;
            case 'INPUT-POST-TEXT':
                this._state.profile.textareaValue = action.inputText;
                this._callSubscriber(this._state);
                break;
            case 'SEND-MESSAGE':
                return this._sendMessage();
            case 'INPUT-MESSAGE':
                return this._inputMessage(action.message);
        }
    }
};

window.store = store;

export default store;