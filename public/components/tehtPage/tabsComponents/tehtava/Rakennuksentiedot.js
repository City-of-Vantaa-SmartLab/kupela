import React from 'react';
import { connect } from 'react-redux';

const Rakennuksentiedot = ({}) =>
    <div className="rakennuksentiedot">
        <h2>Rakennuksen tiedot:</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nibh tristique, aliquam diam eu, convallis risus. Nulla fringilla tortor libero. Etiam egestas ac sapien sit amet lacinia.</p>
    </div>;

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(Rakennuksentiedot);