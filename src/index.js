import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

let postsData = [
    {message: 'YOYOgdrgdfgdfgdg dfgfdhjgfdhjghdfjghdjf dfghdkjhgjdhgjdfhg djghjdhgkjdfhg lorem sdvkjsdkvsdkvksdnvsdnvjsdvjsdnvjsdnvjsdndvsnsudhvisduvhsdnvsd',
    likesCount: 0},
    {message: 'Hi, how are you', likesCount: 15},
    {message: 'it\'s my first post', likesCount: 20},
    {message: 'check check', likesCount: 1},
    {message: 'check check', likesCount: 2} 
];

ReactDOM.render(
    <App 
        postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}
    />, 
    document.querySelector('#root')
);