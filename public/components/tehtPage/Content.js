import React from 'react';
import { connect } from 'react-redux';
import ComponentswithRoutes from './ComponentsRoutes';
import ModalRoot from './tabsComponents/modals/ModalRoot';

const Content = ({ content }) =>
    <div className="content">
        {content.components.map((comp) =>
                <ComponentswithRoutes key={comp.id} {...comp}/>
        )}
        <ModalRoot/>
    </div>;

const mapStateToProps = ({ tab: { content } }) => ({
    content
});

export default connect(mapStateToProps, null)(Content);