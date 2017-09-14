import React from 'react';
import Showcase from '../reusables/templates/Showcase';
import { connect } from 'react-redux';

const Kohdesaapuminen = (props) => (
    <div className="saapuminen">

        {props.arrival.arrivallist.map((c, i) =>
          i+1 == props.arrival.currentArrival ? (
            <div>
              <h2>{c.name}</h2>
              <Showcase src={c.url} />
            </div>
          ) : (null)
        )}
    </div>
);

const mapStateToProps = ({ arrival }) => ({
    arrival
});

export default connect(mapStateToProps, null)(Kohdesaapuminen);
