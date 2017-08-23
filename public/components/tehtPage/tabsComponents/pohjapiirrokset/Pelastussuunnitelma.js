import React from 'react';
import SubitemWrapper from './subcontent/SubitemWrapper';
import { connect } from 'react-redux';

const Pelastussuunnitelma = (props) =>
    <SubitemWrapper {...props} />;

const mapStateToProps = ({ pelastussuunnitelmatab }) => ({
    pelastussuunnitelmatab
});

export default connect(mapStateToProps, null)(Pelastussuunnitelma);