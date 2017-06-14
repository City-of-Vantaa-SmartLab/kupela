import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSubItem, showSelectedSubContent } from '../../../../../reducer/tab/actions';

const SubitemMenu = (props) => (
    <div className="subitemMenu">
        {props.routes.map((item) =>
            <a key={item.nameId} onClick={props.selectSubItem(item.nameId, item)}>
                <item.component key={item.nameId}/>
            </a>
        )}
    </div>
);

const mapDispatchToProps = dispatch => ({
    selectSubItem(subitemId, subitemContent) {
        return () => {
            dispatch(setCurrentSubItem(subitemId));
            dispatch(showSelectedSubContent(subitemContent));
        }
    }
});

export default connect(null, mapDispatchToProps)(SubitemMenu);
