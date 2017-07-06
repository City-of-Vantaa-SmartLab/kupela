import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSubItem, addNewFilter, getMapType } from '../../../../../reducer/tab/actions';

const SubitemMenu = (props) => (
    <div className="subitemMenu">
        {props.routes.map((item) =>
            <item.component key={item.nameId} {...props}/>
        )}
    </div>
);

const mapDispatchToProps = dispatch => ({
    selectSubItem(subitemId, subitemContent, itemType, mapType) {
        return () => {
            dispatch(setCurrentSubItem(subitemId));
            dispatch(addNewFilter(subitemId, subitemContent, itemType));
            dispatch(getMapType(mapType));
        }
    }
});

export default connect(null, mapDispatchToProps)(SubitemMenu);
