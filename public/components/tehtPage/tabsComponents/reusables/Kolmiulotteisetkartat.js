import React from 'react';
import Basic from './templates/Basic';
import { connect } from 'react-redux';

const Kolmiulotteinenkartta = (props) =>
    <div className="kolmiulotteinen">
        <p><b>3D-kartat:</b></p>
        {props.maps.map((m) =>
            <a onClick={props.selectItem(m.nameId, 'GET_kuvatvideot', m)}>
                <Basic src={m.url} title={m.name} {...props}/>
            </a>
        )}
    </div>;

const mapStateToProps = ({ maps }) => ({
    maps
});

export default connect(mapStateToProps, null)(Kolmiulotteinenkartta);