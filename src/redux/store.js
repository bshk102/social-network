import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';
import profileReducer from './profile-reducer';

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

    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.friends = friendsReducer(this._state.friends, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;