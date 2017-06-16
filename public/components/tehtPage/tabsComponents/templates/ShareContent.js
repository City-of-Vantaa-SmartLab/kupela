import React from 'react';
import { connect } from 'react-redux';
import Share from '../../tabsComponents/reusables/templates/Share';
import { setOriginalTemplate } from '../../../../reducer/tab/actions';

const ShareContent = (props) => (
    <div className={props.className}>
        <button type="button" className="return-btn" onClick={props.goBack()}>
            X
        </button>
        <Share src={props.url} title={props.name}/>
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