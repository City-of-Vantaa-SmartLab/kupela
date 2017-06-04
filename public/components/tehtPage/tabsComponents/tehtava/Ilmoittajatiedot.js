import React from 'react';
import { connect } from 'react-redux';

const IlmoittajaTiedot = ({}) =>
  <div className="ilmoittajatiedot">
      <p><b>Tähän tulee ilmoittajan tiedot</b></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nibh tristique, aliquam diam eu, convallis risus. Nulla fringilla tortor libero. Etiam egestas ac sapien sit amet lacinia. Nam maximus lorem vel nibh vehicula, scelerisque cursus elit luctus.</p>
  </div>;

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(IlmoittajaTiedot);