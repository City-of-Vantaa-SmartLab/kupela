import React from 'react';
import SubitemContent from './subcontent/SubitemContent';
import SubitemMenu from './subcontent/SubitemMenu';
import { connect } from 'react-redux';

const Pelastussuunnitelma = (props) =>
    <div className="subtablayout">
        <SubitemMenu {...props}/>
        <SubitemContent />
    </div>;

const mapStateToProps = ({ floorplans, henkilosto, rescueplans, contacts }) => ({
    floorplans,
    henkilosto,
    rescueplans,
    contacts
});

export default connect(mapStateToProps, null)(Pelastussuunnitelma);