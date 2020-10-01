import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import {BrowserRouter} from 'react-router-dom';
import {addNewPost} from './redux/state';

ReactDOM.render(
    <BrowserRouter>
        <App state={state} addNewPost={addNewPost} />
    </BrowserRouter>
    , 
    document.querySelector('#root')
);