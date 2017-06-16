import React from 'react';
import { connect } from 'react-redux';
import SomeUutisetTemplate from '../templates/SomeUutisetTemplate';
import SomeComponents from '../someuutiset/SomeComponents';

const SomeUutiset = (props) => {
    if(!props.template.templateType) {
        return <SomeComponents {...props}/>;
    } else {
        return <SomeUutisetTemplate {...props.template.templateProps.content} />;
    }
};

const mapStateToProps = ({ tab: { template }}) => ({
    template
});

export default connect(mapStateToProps, null)(SomeUutiset);