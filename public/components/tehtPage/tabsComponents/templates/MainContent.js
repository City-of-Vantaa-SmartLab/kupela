import React from 'react';
import { setOriginalTemplate } from '../../../../reducer/tab/actions';
import { connect } from 'react-redux';

const MainContent = (props) => (
    <div className={props.className}>
        <props.component/>
        <button type="button" onClick={props.goBack()}>
            X
        </button>
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