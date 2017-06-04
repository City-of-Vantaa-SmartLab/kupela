import React from 'react';
import { connect } from 'react-redux';

const Rakennuksentiedot = ({}) =>
    <div className="rakennuksentiedot">
        <p><b>Tähän tulee rakennuksen tiedot</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nibh tristique, aliquam diam eu, convallis risus. Nulla fringilla tortor libero. Etiam egestas ac sapien sit amet lacinia. Nam maximus lorem vel nibh vehicula, scelerisque cursus elit luctus. Donec rhoncus consectetur lorem. Praesent volutpat varius malesuada. Aenean vehicula felis sed varius ultrices. Maecenas augue libero, convallis at turpis vitae, pulvinar eleifend eros. Maecenas nec ligula orci. Nam eleifend commodo nisl sed consectetur. Morbi tincidunt ligula non enim facilisis eleifend.</p>
    </div>;

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(Rakennuksentiedot);