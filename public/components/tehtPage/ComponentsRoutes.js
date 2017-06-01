import React from 'react';
import { Route } from 'react-router-dom';

const ComponentswithRoutes = (comp) => (
    <Route path={comp.nameId} render={props => (
        <comp.component {...props} routes={comp.routes}/>
    )}/>
);

export default ComponentswithRoutes;