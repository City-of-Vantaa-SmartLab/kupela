import React from 'react';
import { connect } from 'react-redux';
import { showCurrentModal } from '../../../../reducer/modal/actions';
import ModalRoot from '../../tabsComponents/tehtava/modals/ModalRoot';

const Kohdetiedot = (comp) => (
    <div className="kohdetiedot">
        {comp.components.map((c) =>
            <a onClick={comp.selectItem(c.nameId, 'GET_INFO', c)} key={c.nameId}>
                <c.component key={c.nameId}/>
            </a>
        )}
        <ModalRoot/>
    </div>
);

const mapDispatchToProps = dispatch => ({
    selectItem(id, type, content) {
        return () => {
            dispatch(showCurrentModal(id, type, content));
        }
    }
});

export default connect(null, mapDispatchToProps)(Kohdetiedot);