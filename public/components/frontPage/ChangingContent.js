import React from 'react';
import { connect } from 'react-redux';

const ChangingContent = (props) =>
  <div className="contentArea">
    <p className="changingText"> This text changes </p>
    <p>{props.currentText}</p>
  </div>

const mapStateToProps = ({ textvalues }) => ({
  textvalues
});

export default connect(mapStateToProps, null)(ChangingContent);
