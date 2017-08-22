import React from 'react';
import Showcase from '../reusables/templates/Showcase';
import { connect } from 'react-redux';

const Kohdeyhteystiedot = (props) => (
    <div className="yhteystiedot">
        <p><b>Yhteystietoja:</b></p>
        {props.pelastussuunnitelmatab.map((c) =>
            { c.nameId.localeCompare("contacts1")===0 ? <Showcase src={c.url} /> : false}
        )}
    </div>
);

const mapStateToProps = ({ pelastussuunnitelmatab }) => ({
    pelastussuunnitelmatab
});

export default connect(mapStateToProps, null)(Kohdeyhteystiedot);