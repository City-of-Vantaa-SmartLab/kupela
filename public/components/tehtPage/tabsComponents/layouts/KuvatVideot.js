import React from 'react';
import { connect } from 'react-redux';
import KuvatVideotTemplate from '../templates/KuvatVideotTemplate';
import KuvatComponents from '../kuvatvideot/KuvatComponents';

const KuvatVideot = (props) => {
    if(!props.template.templateType) {
        return <KuvatComponents {...props}/>;
    } else {
        return <KuvatVideotTemplate {...props.template.templateProps.content}/>;
    }
};

const mapStateToProps = ({ tab: { template }}) => ({
    template
});

export default connect(mapStateToProps, null)(KuvatVideot);