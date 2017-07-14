import React from 'react';
import { Route } from 'react-router-dom';
import FrontPage from './components/frontPage/FrontPage';
import App from './components/App';

export default (
    <div>
        <Route path="/" component={App}>
            <Route path="frontpage" component={FrontPage}/>
        </Route>
    </div>
);
