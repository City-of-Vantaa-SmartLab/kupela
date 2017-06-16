import React from 'react';
import { connect } from 'react-redux';
import KuvatVideotTemplate from '../templates/KuvatVideotTemplate';
import KuvatVideotComponents from '../kuvatvideot/KuvatVideotComponents';

const KuvatVideot = (props) => {
    if(!props.template.templateType) {
        return <KuvatVideotComponents {...props}/>;
    } else {
        return <KuvatVideotTemplate {...props.template.templateProps.content}/>;
    }
};

const mapStateToProps = ({ tab: { template }}) => ({
    template
});

export default connect(mapStateToProps, null)(KuvatVideot);