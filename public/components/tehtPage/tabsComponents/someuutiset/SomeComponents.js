import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentTemplate, setMenu } from '../../../../reducer/tab/actions';

const SomeComponents = (props) =>
    <div className="someuutiset">
        {props.routes.map((comp) =>
            <a onClick={props.selectItem(comp.nameId, 'GET_some', comp, props.routes)}>
                <comp.component key={comp.nameId} {...comp}/>
            </a>
        )}
    </div>;

const mapDispatchToProps = dispatch => ({
    selectItem(id, type, content, components) {
        return () => {
            dispatch(changeCurrentTemplate(id, type, content));
            dispatch(setMenu(components));
        }
    }
});

export default connect(null, mapDispatchToProps)(SomeComponents);