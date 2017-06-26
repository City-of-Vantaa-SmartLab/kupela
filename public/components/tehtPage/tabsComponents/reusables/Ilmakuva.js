import React from 'react';
import Showcase from './templates/Showcase';
import { connect } from 'react-redux';

const Ilmakuva = (props) => (
    <div className="ilmakuva">
        <p><b>Ilmakuva:</b></p>
        {props.aerialviews.map((view) =>
            <a onClick={props.selectSubItem(view.nameId, view)}>
                <Showcase src={view.url} {...props}/>
            </a>
        )}
    </div>
);

const mapStateToProps = ({ aerialviews }) => ({
    aerialviews
});

export default connect(mapStateToProps, null)(Ilmakuva);