import React from 'react';
import { connect } from 'react-redux';

const IlmoittajaTiedot = ({}) =>
  <div id="ilmoitustiedot" className="container">
      <p><b>Tähän tulee ilmoittajan tiedot</b></p>
      <p></p>
  </div>;

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(IlmoittajaTiedot);