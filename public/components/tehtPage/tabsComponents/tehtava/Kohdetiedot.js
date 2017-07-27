import React from 'react';
import { connect } from 'react-redux';
import { showCurrentModal, setModalMenu } from '../../../../reducer/modal/actions';

const Kohdetiedot = (props) => (
    <div className="kohdetiedot">
        {props.components.map((c) =>
            <a onClick={props.selectItem(c.nameId, 'GET_INFO', c, props.components)}>
                <c.component key={c.nameId} />
            </a>
        )}
    </div>
);

const mapDispatchToProps = dispatch => ({
    selectItem(id, type, content, components) {
        return () => {
            dispatch(showCurrentModal(id, type, content));
            dispatch(setModalMenu(components));
        }
    }
});

export default connect(null, mapDispatchToProps)(Kohdetiedot);