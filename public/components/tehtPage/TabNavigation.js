import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { setCurrentTab, showCurrentTabcontent } from '../../reducer/tab/actions';

const TabNavigation = ({ tabs, selectTab }) =>
    <div className="container-fluid">
        <Nav bsStyle="pills">
            {tabs.map((c) =>
                    <NavItem onClick={selectTab(c.id, c)}
                    key={c.id}>
                        {c.name}
                    </NavItem>
            )}
        </Nav>
    </div>;

const mapStateToProps = ({ tabs }) => ({
   tabs,
});

const mapDispatchToProps = dispatch => ({
    selectTab(id, c) {
        return() => {
            dispatch(setCurrentTab(id));
            dispatch(showCurrentTabcontent(c));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);