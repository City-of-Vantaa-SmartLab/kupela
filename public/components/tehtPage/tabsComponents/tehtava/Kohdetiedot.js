import React from 'react';
import { connect } from 'react-redux';
import { showCurrentModal, setModalMenu } from '../../../../reducer/modal/actions';

const Kohdetiedot = (comp) => (
    <div className="kohdetiedot">
        {comp.components.map((c) =>
            <a onClick={comp.selectItem(c.nameId, 'GET_INFO', c, comp.components)}>
                <c.component key={c.nameId}/>
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