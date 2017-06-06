import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showCurrentModal, showCurrentModalContent } from '../../../../reducer/modal/actions';
import ModalRoot from '../../tabsComponents/tehtava/modals/ModalRoot';

const Kohdetiedot = (comp) => (
    <div className="kohdetiedot">
        {comp.components.map((c) =>
            <Link onClick={comp.selectItem(c.nameId, 'GET_INFO', c)} key={c.nameId} to={{
                pathname: `/kohdetiedot/${c.nameId}`
            }}>
                <c.component key={c.nameId}/>
            </Link>
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