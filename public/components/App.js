import React from 'react';
import Header from './Header';
import FrontPage from './frontPage/FrontPage';
import TehtPage from './tehtPage/TehtPage';
import './styles/styles.css';

const App = (props) =>
    <div className="container">
        <Header/>
        <TehtPage/>
    </div>;

export default App;