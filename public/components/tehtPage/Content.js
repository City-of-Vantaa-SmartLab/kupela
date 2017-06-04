import React from 'react';
import { connect } from 'react-redux';
import ComponentswithRoutes from './ComponentsRoutes';

const Content = ({ content }) =>
    <div className="content">
        {content.components.map((comp) =>
                <ComponentswithRoutes key={comp.id} {...comp}/>
        )}
    </div>;

const mapStateToProps = ({ tab: { content } }) => ({
    content,
});

export default connect(mapStateToProps)(Content);