import React from 'react';
import { connect } from 'react-redux';
import Asiakkaidentiedot from './tabsComponents/tehtava/Asiakkaidentiedot';
import Ilmoittajatiedot from './tabsComponents/tehtava/Ilmoittajatiedot';
import Rakennuksentiedot from './tabsComponents/tehtava/Rakennuksentiedot';

const Content = ({ content }) =>
    <div>
        <h1>nameId: {content.nameId}</h1>
        <div>
            {content.components.map((i) =>
            <h2>{i}</h2>
            )}
        </div>
    </div>;

const mapStateToProps = ({ tab: { content } }) => ({
    content,
});

export default connect(mapStateToProps)(Content);