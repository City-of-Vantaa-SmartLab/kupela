import React from 'react';
import SubitemWrapper from './subcontent/SubitemWrapper';
import { connect } from 'react-redux';

const Vaarallisetaineet = (props) =>
    <SubitemWrapper {...props} />;

const mapStateToProps = ({ vaarallisetaineettab, smokespreading }) => ({
    vaarallisetaineettab
});

export default connect(mapStateToProps, null)(Vaarallisetaineet);