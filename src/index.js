import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App 
                state={state} 
                dispatch={store.dispatch.bind(store)} 
            />
        </BrowserRouter>
        , 
        document.querySelector('#root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);