import React from 'react';
import { connect } from 'react-redux';

const IlmoittajaTiedot = ({}) =>
  <div>
      <p>Tähän tulee ilmoittajan tiedot</p>
      <p></p>
  </div>;

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(IlmoittajaTiedot);