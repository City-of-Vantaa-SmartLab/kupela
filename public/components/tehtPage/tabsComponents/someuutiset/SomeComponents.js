import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentTemplate } from '../../../../reducer/tab/actions';
import { shareInformation, setSharedButton, addShareableItem } from '../../../../reducer/tab/actions';

const SomeComponents = (props) =>
    <div className={props.user.usertype === "field" ? "someuutisetfield" : "someuutiset"}>
        {props.routes.map((comp) =>
            <comp.component key={comp.nameId} {...props} />
        )}
    </div>;

const mapStateToProps = ({ user, images, texts, news, tab: { shared_info, buttons} }) => ({
    user,
    images,
    texts,
    news,
    shared_info,
    buttons,
});

const mapDispatchToProps = dispatch => ({
    selectItem(id, type, content) {
        return() => {
            dispatch(changeCurrentTemplate(id, type, content));
        }
    },
    clickShare(id, type, content) {
        return() => {
            dispatch(addShareableItem(id));
            dispatch(shareInformation(id, type, content));
            dispatch(setSharedButton(id));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SomeComponents);
