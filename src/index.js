import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addNewPost, inputPostText, inputMessage, sendMessage, subscribe} from './redux/state';
import state from './redux/state';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App 
                state={state} 
                addNewPost={addNewPost} 
                inputPostText={inputPostText} 
                inputMessage={inputMessage}
                sendMessage={sendMessage}
            />
        </BrowserRouter>
        , 
        document.querySelector('#root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);