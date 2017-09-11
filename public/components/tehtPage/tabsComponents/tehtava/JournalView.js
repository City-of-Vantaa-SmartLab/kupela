import React from 'react';
import { connect } from 'react-redux';

const JournalView = (props) => (
  <div className="journalViewArea">
    <div className="scrollableArea">
      <div className="journalTextView">
       TILANNEPÄIVÄKIRJA
       {props.journalEntries.entries.map((c) =>
           <p className="journalEntry">
              {c.sender} : {c.time} - {c.message}
           </p>
       )}
      </div>
    </div>
  </div>
);

const mapStateToProps = ({journal: {journalEntries}}) => ({
  journalEntries
});

export default connect(mapStateToProps, null)(JournalView);
