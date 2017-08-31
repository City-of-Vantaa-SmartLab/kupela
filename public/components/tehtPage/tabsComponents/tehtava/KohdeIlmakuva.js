import React from 'react';
import { connect } from 'react-redux';

const staticAirUrl1 = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const staticAirUrl2 = '&zoom=13&size=600x300&maptype=satellite&key=AIzaSyCIr0jpTVj-s9pNn35kb4M4V3jyTFnsevc&format=png&visual_refresh=true';

const KohdeIlmakuva = (props) => (
    <div className="ilmakuva">
        <h2>Ilmakuva:</h2>
        {props.aerialviews.map((view) =>
            <img src={ staticAirUrl1 + view.lat + ',' + view.lng + staticAirUrl2 }/>
        )}
    </div>
);

const mapStateToProps = ({ aerialviews }) => ({
    aerialviews
});

export default connect(mapStateToProps, null)(KohdeIlmakuva);