import React from 'react';
import { setOriginalTemplate } from '../../../../reducer/tab/actions';
import { connect } from 'react-redux';

const MainContent = (props) => (
    <div className={props.className}>
        <button type="button" className="return-btn" onClick={props.goBack()}>
            X
        </button>
        <props.component/>
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