import React from 'react';
import { selectAsMainContent } from '../../../../reducer/tab/actions';
import { connect } from 'react-redux';

const Menu = (props) => (
    <div className={props.className}>
        {props.template.menuProps.map((comp) =>
            <a onClick={props.selectItem(comp.nameId, comp)}>
                <comp.component key={comp.nameId}/>
            </a>
        )}
    </div>
);

const mapStateToProps = ({ tab: { template }}) => ({
    template
});

const mapDispatchToProps = dispatch => ({
    selectItem(id, component) {
        return() => {
            dispatch(selectAsMainContent(id, component));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);