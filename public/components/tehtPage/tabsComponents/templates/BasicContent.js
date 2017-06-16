import React from 'react';
import { connect } from 'react-redux';
import Basic from '../../tabsComponents/reusables/templates/Basic';
import { setOriginalTemplate } from '../../../../reducer/tab/actions';

const ShareContent = (props) => (
    <div className={props.className}>
        <button type="button" className="return-btn" onClick={props.goBack()}>
            X
        </button>
        <Basic src={props.url} title={props.name}/>
    </div>
);

const mapDispatchToProps = dispatch => ({
    goBack() {
        return() => {
            dispatch(setOriginalTemplate());
        }
    }
});

export default connect(null, mapDispatchToProps)(ShareContent);