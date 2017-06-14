import React from 'react';
import { connect } from 'react-redux';
import { selectModalcontent } from '../../../../reducer/modal/actions';

const ModalMenu = (props) => (
    <div className={props.className}>
        {props.id.modalMenu.map((comp) =>
            <a onClick={props.selectItem(comp.nameId, comp)}>
                <comp.component key={comp.nameId}/>
            </a>
        )}
    </div>
);

const mapStateToProps = ({ modal: { id }}) => ({
    id
});

const mapDispatchToProps = dispatch => ({
    selectItem(id, object) {
        return() => {
            dispatch(selectModalcontent(id, object));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalMenu);