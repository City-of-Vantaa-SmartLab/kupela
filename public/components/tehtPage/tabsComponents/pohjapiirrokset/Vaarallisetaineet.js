import React from 'react';
import SubitemWrapper from './subcontent/SubitemWrapper';
import { connect } from 'react-redux';

const Vaarallisetaineet = (props) =>
    <SubitemWrapper {...props} />;

const mapStateToProps = ({ listofsubstances, chemicalcards, smokespreading, escape }) => ({
    listofsubstances,
    chemicalcards,
    smokespreading,
    escape
});

export default connect(mapStateToProps, null)(Vaarallisetaineet);