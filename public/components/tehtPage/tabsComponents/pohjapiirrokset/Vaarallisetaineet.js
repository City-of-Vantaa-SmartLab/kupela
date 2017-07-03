import React from 'react';
import SubitemContent from './subcontent/SubitemContent';
import SubitemMenu from './subcontent/SubitemMenu';
import { connect } from 'react-redux';

const Vaarallisetaineet = (props) =>
    <div className="subtablayout">
        <SubitemMenu {...props}/>
        <SubitemContent />
    </div>;

const mapStateToProps = ({ dangerfloorplans, listofsubstances, chemicalcards, smokespreading, escape }) => ({
    dangerfloorplans,
    listofsubstances,
    chemicalcards,
    smokespreading,
    escape
});

export default connect(mapStateToProps, null)(Vaarallisetaineet);