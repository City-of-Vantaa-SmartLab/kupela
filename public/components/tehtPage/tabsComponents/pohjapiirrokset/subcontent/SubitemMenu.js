import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSubItem, addNewFilter, getMapType } from '../../../../../reducer/tab/actions';

const SubitemMenu = (props) => (
    <div className="subitemMenu">
        {props.routes.map((item) =>
            <div>
             <item.component key={item.nameId} {...props}/>
            </div>
        )}
    </div>
);

const mapDispatchToProps = dispatch => ({
    selectSubItem(subitemId, subitemContent, itemType, mapType) {
        return() => {
            dispatch(setCurrentSubItem(subitemId));
            dispatch(addNewFilter(subitemId, subitemContent, itemType));
            dispatch(getMapType(mapType));
        }
    }
});

const mapStateToProps = ({ tab: { filter } }) => ({
    filter
});

export default connect(mapStateToProps, mapDispatchToProps)(SubitemMenu);
