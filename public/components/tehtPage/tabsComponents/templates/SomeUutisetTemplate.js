import React from 'react';
import MainContent from './MainContent';

const SomeUutisetTemplate = (props) => (
    <div className="some-grid">
        <MainContent component={props.component} className="somecontent" {...props} />
    </div>
);

export default SomeUutisetTemplate;