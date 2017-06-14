import React from 'react';
import MainContent from './MainContent';
import Menu from './Menu';
import Jaetut from '../someuutiset/Jaetut';

const SomeUutisetTemplate = (props) => (
    <div className="some-grid">
        <Menu className="somemenu"/>
        <MainContent component={props.component} className="somecontent" {...props}/>
        <Jaetut/>
    </div>
);

export default SomeUutisetTemplate;