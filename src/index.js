import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = (props) => {
    return (
        <div>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <Profile />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));