import React from 'react';
import SubitemWrapper from './subcontent/SubitemWrapper';
import { connect } from 'react-redux';

const Vaarallisetaineet = (props) =>
    <SubitemWrapper {...props} />;

const mapStateToProps = ({ vaarallisetaineettab, smokespreading }) => ({
    vaarallisetaineettab,
    smokespreading
});

export default connect(mapStateToProps, null)(Vaarallisetaineet);