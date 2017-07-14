import React from 'react';
import SubitemWrapper from './subcontent/SubitemWrapper';
import { connect } from 'react-redux';

const Vaarallisetaineet = (props) =>
    <SubitemWrapper {...props} />;

const mapStateToProps = ({ dangerfloorplans, listofsubstances, chemicalcards, smokespreading, escape }) => ({
    dangerfloorplans,
    listofsubstances,
    chemicalcards,
    smokespreading,
    escape
});

export default connect(mapStateToProps, null)(Vaarallisetaineet);