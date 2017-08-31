import React from 'react';
import Showcase from '../reusables/templates/Showcase';
import { connect } from 'react-redux';

const Kohdeyhteystiedot = (props) => (
    <div className="yhteystiedot">
        <h2>Yhteystietoja:</h2>
        {props.contacts.map((c) =>
            <Showcase src={c.url} />
        )}
    </div>
);

const mapStateToProps = ({ contacts }) => ({
    contacts
});

export default connect(mapStateToProps, null)(Kohdeyhteystiedot);