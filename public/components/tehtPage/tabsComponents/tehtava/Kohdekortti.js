import React from 'react';
import Showcase from '../reusables/templates/Showcase';
import { connect } from 'react-redux';

const Kohdekortti = (props) => (
    <div className="kohdekortti">
        <p><b>Kohdekortti:</b></p>
        {props.kohdekortit.map((card) =>
            <Showcase src={card.url}/>
        )}
    </div>
);

const mapStateToProps = ({ kohdekortit }) => ({
    kohdekortit
});

export default connect(mapStateToProps, null)(Kohdekortti);