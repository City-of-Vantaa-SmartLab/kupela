import React from 'react';
import Showcase from './templates/Showcase';
import { connect } from 'react-redux';

const Kokoontumispaikka = (props) => (
    <div className="kokoontumispaikka">
        <p><b>Kokoontumispaikka:</b></p>
        {props.gatheringplaces.map((place) =>
            <a onClick={props.selectSubItem(place.nameId, place)}>
                <Showcase src={place.url} {...props}/>
            </a>
        )}
    </div>
);

const mapStateToProps = ({ gatheringplaces }) => ({
    gatheringplaces
});

export default connect(mapStateToProps, null)(Kokoontumispaikka);