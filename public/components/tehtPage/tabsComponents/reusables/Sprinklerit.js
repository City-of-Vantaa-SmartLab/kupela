import React from 'react';
import { connect } from 'react-redux';
import Showcase from './templates/Showcase';

const Sprinklerit = (props) => (
    <div className="sprinklerit">
        <p><b>Sprinklerit:</b></p>
        {props.sprinklers.map((s) =>
            <a onClick={props.selectSubItem(s.nameId, s)}>
                <Showcase src={s.url} {...props}/>
            </a>
        )}
    </div>
);

const mapStateToProps = ({ sprinklers }) => ({
    sprinklers
});

export default connect(mapStateToProps, null)(Sprinklerit);