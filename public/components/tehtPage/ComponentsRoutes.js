import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const ComponentswithRoutes = (comp) => (
    <Router>
        <Switch>
            <Route path={comp.nameId} render={props => (
                <comp.component {...props} routes={comp.routes}/>
            )}/>
        </Switch>
    </Router>
);

export default ComponentswithRoutes;