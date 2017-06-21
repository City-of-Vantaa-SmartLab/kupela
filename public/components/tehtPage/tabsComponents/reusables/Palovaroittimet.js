import React from 'react';
import Showcase from './templates/Showcase';
import { connect } from 'react-redux';

const Palovaroittimet = (props) => (
    <div className="palovaroittimet">
        <p><b>Palovaroittimet:</b></p>
        {props.firealarms.map((alarm) =>
            <a onClick={props.selectSubItem(alarm.nameId, alarm)}>
                <Showcase src={alarm.url} {...props}/>
            </a>
        )}
    </div>
);

const mapStateToProps = ({ firealarms }) => ({
    firealarms
});

export default connect(mapStateToProps, null)(Palovaroittimet);