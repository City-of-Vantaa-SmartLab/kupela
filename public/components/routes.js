import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FrontPage from './frontPage/FrontPage';
import TehtPage from './tehtPage/TehtPage';
import NotFound from './NotFound';

const Routes = () => (
    <Switch>
        <Route exact="/tehtavat/:name" component={TehtPage}/>
        <Route exact="/tehtavat" component={FrontPage}/>
        <Route component={NotFound}/>
    </Switch>
);

export default Routes;