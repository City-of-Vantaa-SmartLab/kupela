import React from 'react';
import ShareContent from './ShareContent';
import BasicContent from './BasicContent';
import { connect } from 'react-redux';

const MainContent = (props) => {
    if(props.template.templateType === 'GET_some') {
        return <ShareContent {...props}/>;
    } else {
        return <BasicContent {...props}/>
    }
};

const mapStateToProps = ({ tab : { template }}) => ({
    template
});

export default connect(mapStateToProps, null)(MainContent);