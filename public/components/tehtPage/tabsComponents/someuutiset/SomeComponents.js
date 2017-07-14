import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentTemplate } from '../../../../reducer/tab/actions';
import { shareInformation, setSharedButton, addShareableItem } from '../../../../reducer/tab/actions';

const SomeComponents = (props) =>
    <div className="someuutiset">
        {props.routes.map((comp) =>
            <comp.component key={comp.nameId} {...props} />
        )}
    </div>;

const mapStateToProps = ({ images, texts, news, tab: { shared_info, buttons} }) => ({
    images,
    texts,
    news,
    shared_info,
    buttons
});

const mapDispatchToProps = dispatch => ({
    selectItem(id, type, content) {
        return() => {
            dispatch(changeCurrentTemplate(id, type, content));
        }
    },
    clickShare(id, content) {
        return() => {
            dispatch(addShareableItem(id));
            dispatch(shareInformation(id, content));
            dispatch(setSharedButton(id));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SomeComponents);