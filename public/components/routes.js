import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FrontPage from './frontPage/frontPage';
import TehtPage from './tehtPage/TehtPage';
import AdminPage from './ozadmin/AdminPage';
import NotFound from './NotFound';

const Routes = () => (
    <Switch>
      <Route path="/main" component={FrontPage}/>
      <Route path="/tehtavat" component={TehtPage}/>
      <Route path="/ozadmin" component={AdminPage}/>
      <Route component={NotFound}/>
    </Switch>
);

export default Routes;
