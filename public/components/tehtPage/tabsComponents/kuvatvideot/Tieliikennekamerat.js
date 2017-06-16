import React from 'react';
import { connect } from 'react-redux';
import Basic from '../reusables/templates/Basic';

const Tieliikennekamerat = (props) =>
    <div className="tieliikennekamerat">
        <p><b>Tieliikennekamerat:</b></p>
        {props.roadcams.map((cam) =>
            <a onClick={props.selectItem(cam.nameId, 'GET_kuvatvideot', cam)}>
                <Basic src={cam.url} title={cam.name} {...props}/>
            </a>
        )}
    </div>;

const mapStateToProps = ({ roadcams }) => ({
    roadcams
});

export default connect(mapStateToProps, null)(Tieliikennekamerat);