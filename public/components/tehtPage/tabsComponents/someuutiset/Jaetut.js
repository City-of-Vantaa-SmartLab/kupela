import React from 'react';
import { connect } from 'react-redux';
import Share from '../reusables/templates/Share';

const Jaetut = (props) =>
    <div className="jaetut">
        <p><b>Jaetut:</b></p>
        {props.shared_info.arr.map((a) =>
            <a onClick={props.selectItem(a.id, 'GET_some', a.content)}>
                <Share src={a.content.url} title={a.content.name} key={a.id}
                       nameId={a.content.nameId}
                       content={a.content} />
            </a>
        )}
    </div>;

const mapStateToProps = ({ tab: { shared_info } }) => ({
    shared_info
});

export default connect(mapStateToProps, null)(Jaetut);