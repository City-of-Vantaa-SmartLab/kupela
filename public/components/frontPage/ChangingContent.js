import React from 'react';
import { connect } from 'react-redux';

const ChangingContent = (props) =>
  <div className="contentArea">
    <p className="changingText"> This text changes </p>
    {props.textvalues.map((val) =>
      <p className="someText">val.currentText</p>
    )}
  </div>

const mapStateToProps = (textvalues) => ({
  textvalues
});

export default connect(mapStateToProps, null)(ChangingContent);
