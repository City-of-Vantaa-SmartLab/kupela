import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentTemplate } from '../../../../reducer/tab/actions';

const KuvatVideotComponents = (props) =>
    <div className="kuvatvideot">
        {props.routes.map((comp) =>
            <comp.component key={comp.nameId} {...props}/>
        )}
    </div>;

const mapDispatchToProps = dispatch => ({
    selectItem(id, type, content) {
        return() => {
            dispatch(changeCurrentTemplate(id, type, content));
        }
    }
});

export default connect(null, mapDispatchToProps)(KuvatVideotComponents);