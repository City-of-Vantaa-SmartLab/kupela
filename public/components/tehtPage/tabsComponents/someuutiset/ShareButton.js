import React from 'react';

const ShareButton = (props) => (
    <button className="share-btn"
            type="button"
            onClick={props.onClick}
            key={props.key}
    >
        {props.buttons.isShared ? 'Jaettu' : 'Jaa johtoautoon'}
    </button>
);

export default ShareButton;