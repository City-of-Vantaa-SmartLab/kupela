import React from 'react';
import { connect } from 'react-redux';

const Rakennuksentiedot = ({}) =>
    <div id="rakennustiedot" className="container">
        <p><b>Tähän tulee rakennuksen tiedot</b></p>
    </div>;

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(Rakennuksentiedot);