import React from 'react';
import Showcase from '../reusables/templates/Showcase';
import { connect } from 'react-redux';

const KohdeIlmakuva = (props) => (
    <div className="ilmakuva">
        <p><b>Ilmakuva:</b></p>
        {props.aerialviews.map((view) =>
            <Showcase src={view.url}/>
        )}
    </div>
);

const mapStateToProps = ({ aerialviews }) => ({
    aerialviews
});

export default connect(mapStateToProps, null)(KohdeIlmakuva);