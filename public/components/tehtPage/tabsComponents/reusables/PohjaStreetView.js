import React from 'react';
import Showcase from './templates/Showcase';
import { connect } from 'react-redux';

const PohjaStreetView = (props) => (
    <div className="streetview">
        <p><b>Street view:</b></p>
        {props.streetviews.map((view) =>
            <a onClick={props.selectSubItem(view.nameId, view)}>
                <Showcase src={view.url} {...props}/>
            </a>
        )}
    </div>
);

const mapStateToProps = ({ streetviews }) => ({
    streetviews
});

export default connect(mapStateToProps, null)(PohjaStreetView);