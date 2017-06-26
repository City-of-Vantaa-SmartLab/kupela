import React from 'react';
import { connect } from 'react-redux';
import Showcase from './templates/Showcase';

const Kartta = (props) => (
    <div className="kartta">
        <p><b>Kartta:</b></p>
        {props.roadmaps.map((road) =>
            <a onClick={props.selectSubItem(road.nameId, road)}>
                <Showcase src={road.url} {...props}/>
            </a>
        )}
    </div>
);

const mapStateToProps = ({ roadmaps }) => ({
    roadmaps
});

export default connect(mapStateToProps, null)(Kartta);