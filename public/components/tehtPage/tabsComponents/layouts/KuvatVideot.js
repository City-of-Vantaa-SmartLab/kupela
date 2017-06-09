import React from 'react';
import { connect } from 'react-redux';
import { showCurrentModal } from '../../../../reducer/modal/actions';

const KuvatVideot = (props) =>
    <div className="kuvatvideot">
        {props.routes.map((comp) =>
            <a onClick={props.selectItem(comp.nameId, 'GET_INFO', comp)}>
                <comp.component key={comp.nameId} {...comp}/>
            </a>
        )}
    </div>;

const mapDispatchToProps = dispatch => ({
    selectItem(id, type, object) {
        return() => {
            dispatch(showCurrentModal(id, type, object));
        }
    }
});

export default connect(null, mapDispatchToProps)(KuvatVideot);