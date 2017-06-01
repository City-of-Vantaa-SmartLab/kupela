import React from 'react';
import Header from './Header';
import FrontPage from './frontPage/FrontPage';
import TehtPage from './tehtPage/TehtPage';
import NotFound from './NotFound';
import { Route } from 'react-router-dom';
import Routes from './routes';
import './styles/styles.css';

const App = () =>
    <div className="container">
        <Header/>
        <Routes/>
    </div>;

export default App;