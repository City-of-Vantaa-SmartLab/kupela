import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSubItem, addNewFilter, resetFiltersToNull } from '../../../../../reducer/tab/actions';

const SubitemMenu = (props) => (
    <div className="subitemMenu">
        {props.routes.map((item) =>
            <item.component key={item.nameId} {...props}/>
        )}
    </div>
);

const mapDispatchToProps = dispatch => ({
    selectSubItem(subitemId, subitemContent) {
        return () => {
            dispatch(setCurrentSubItem(subitemId));
            dispatch(addNewFilter(subitemId, subitemContent));
        }
    },
    selectAsOnlySubItemcontent(subitemId, subitemContent) {
        return () => {
            dispatch(resetFiltersToNull());
            dispatch(setCurrentSubItem(subitemId));
            dispatch(addNewFilter(subitemId, subitemContent));
        }
    }
});

export default connect(null, mapDispatchToProps)(SubitemMenu);
