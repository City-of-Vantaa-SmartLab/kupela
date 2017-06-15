import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentTemplate } from '../../../../reducer/tab/actions';

const KuvatVideot = (props) =>
    <div className="kuvatvideot">
        {props.routes.map((comp) =>
            <a onClick={props.selectItem(comp.nameId, 'GET_kuvatvideot', comp)}>
                <comp.component key={comp.nameId} {...props}/>
            </a>
        )}
    </div>;

const mapDispatchToProps = dispatch => ({
    selectItem(id, type, content) {
        return() => {
            dispatch(changeCurrentTemplate(id, type, content));
        }
    }
});

export default connect(null, mapDispatchToProps)(KuvatVideot);