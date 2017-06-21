import React from 'react';
import { connect } from 'react-redux';

const SubitemContent = ({ filter }) => (
    <div className="subitemContent">
        {filter.arr.map((f) =>
            <img key={f.id} src={f.subitem.url}/>
        )}
    </div>
);

const mapStateToProps = ({ tab: { filter }}) => ({
    filter
});

export default connect(mapStateToProps, null)(SubitemContent);