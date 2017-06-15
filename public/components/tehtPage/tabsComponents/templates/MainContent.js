import React from 'react';
import { setOriginalTemplate } from '../../../../reducer/tab/actions';
import { connect } from 'react-redux';
import Component from '../reusables/templates/Component';

const MainContent = (props) => (
    <div className={props.className}>
        <button type="button" className="return-btn" onClick={props.goBack()}>
            X
        </button>
        <Component src={props.url} className={props.nameId} title={props.name}/>
    </div>
);

const mapDispatchToProps = dispatch => ({
    goBack() {
        return() => {
            dispatch(setOriginalTemplate());
        }
    }
});

export default connect(null, mapDispatchToProps)(MainContent);