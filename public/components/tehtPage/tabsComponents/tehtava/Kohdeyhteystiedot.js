import React from 'react';
import Showcase from '../reusables/templates/Showcase';
import { connect } from 'react-redux';

const Kohdeyhteystiedot = (props) => (
    <div className="yhteystiedot">
        <p><b>Yhteystietoja:</b></p>
        {props.contacts.map((c) =>
            <Showcase src={c.url} />
        )}
    </div>
);

const mapStateToProps = ({ contacts }) => ({
    contacts
});

export default connect(mapStateToProps, null)(Kohdeyhteystiedot);