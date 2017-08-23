import React from 'react';
import { connect } from 'react-redux';

const ChangingContent = ({textvalues}) =>
  <div className="changingcontentArea">
    <p className="changingText"> </p>
    <p>{textvalues.currentText}</p>
  </div>

const mapStateToProps = ({textvalues}) => ({
    textvalues
});


export default connect(mapStateToProps, null)(ChangingContent);
