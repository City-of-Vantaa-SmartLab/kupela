import React from 'react';
import Component from '../reusables/templates/Component';
import { connect } from 'react-redux';

const Uutiset = (props) =>
    <div className="uutiset">
        <p><b>Uutiset:</b></p>
        {props.news.map((n) =>
        <a onClick={props.selectItem(n.nameId, 'GET_news', n)}>
            <Component src={n.url} className={n.nameId} title={n.name}/>
        </a>
        )}
    </div>;

const mapStateToProps = ({ news }) => ({
    news
});

export default connect(mapStateToProps, null)(Uutiset);