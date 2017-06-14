import React from 'react';
import MainContent from './MainContent';
import Menu from './Menu';

const KuvatVideotTemplate = (props) => (
    <div className="kuvatvideot-grid">
        <Menu className="kuvatvideotmenu" />
        <MainContent component={props.component} className="kuvatvideotcontent" {...props} />
    </div>
);

export default KuvatVideotTemplate;