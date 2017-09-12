import React from 'react';
import Showcase from '../reusables/templates/Showcase';
import { connect } from 'react-redux';

const Kohdesaapuminen = (props) => (
    <div className="saapuminen">
        <h2>Saapuminen:</h2>
        {props.arrival.arrivallist.map((c, i) =>
          i+1 == props.arrival.currentArrival ? (
            <Showcase src={c.url} />
          ) : (null)
        )}
    </div>
);

const mapStateToProps = ({ arrival }) => ({
    arrival
});

export default connect(mapStateToProps, null)(Kohdesaapuminen);
