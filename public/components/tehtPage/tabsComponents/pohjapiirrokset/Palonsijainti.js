import React from 'react';
import SubitemContent from './subcontent/SubitemContent';
import SubitemMenu from './subcontent/SubitemMenu';
import { connect } from 'react-redux';

const Palonsijainti = (props) =>
    <div className="subtablayout">
        <SubitemMenu {...props}/>
        <SubitemContent/>
    </div>;

const mapStateToProps = ({ firealarms, sprinklers }) => ({
    firealarms,
    sprinklers
});

export default connect(mapStateToProps, null)(Palonsijainti);