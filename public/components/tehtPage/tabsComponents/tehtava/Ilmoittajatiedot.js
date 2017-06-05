import React from 'react';
import { connect } from 'react-redux';

const IlmoittajaTiedot = ({}) =>
  <div className="ilmoittajatiedot">
      <p><b>Ilmoittajan tiedot:</b></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nibh tristique, aliquam diam eu, convallis risus. Nulla fringilla tortor libero. </p>
  </div>;

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(IlmoittajaTiedot);