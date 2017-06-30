import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentTemplate, shareInformation, setSharedButton } from '../../../../reducer/tab/actions';

const SomeComponents = (props) =>
    <div className="someuutiset">
        {props.routes.map((comp) =>
            <comp.component key={comp.nameId} {...props} />
        )}
    </div>;

const mapStateToProps = ({ images, texts, news, tab: { button, shared_info }}) => ({
    images,
    texts,
    news,
    shared_info,
    button
});

const mapDispatchToProps = dispatch => ({
    selectItem(id, type, content) {
        return () => {
            dispatch(changeCurrentTemplate(id, type, content));
        }
    },
    clickShare(isShared, id, content) {
        return () => {
            dispatch(setSharedButton(id, isShared));
            dispatch(shareInformation(id, content));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SomeComponents);