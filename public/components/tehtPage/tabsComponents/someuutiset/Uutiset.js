import React from 'react';
import Share from '../reusables/templates/Share';
import { connect } from 'react-redux';

const Uutiset = (props) =>
    <div className="uutiset">
        <p><b>Uutiset:</b></p>
        {props.news.map((n) =>
            <a onClick={props.selectItem(n.nameId, 'GET_some', n)}>
                <Share src={n.url} title={n.name} {...props}/>
            </a>
        )}
    </div>;

const mapStateToProps = ({ news }) => ({
    news
});

export default connect(mapStateToProps, null)(Uutiset);