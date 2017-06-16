import React from 'react';
import MainContent from './MainContent';

const KuvatVideotTemplate = (props) => (
    <div className="kuvatvideot-grid">
        <MainContent component={props.component} className="kuvatvideotcontent" {...props} />
    </div>
);

export default KuvatVideotTemplate;