import React from 'react';
import { connect } from 'react-redux';
import { changeInputValue } from '../../../../reducer/journal/actions';

const InputHandler = (props) =>
  <input type="text" className="journalInput" value={props.journalInput.inputValue} onChange={(event) => props.handleChange(event.target.value)}/>;

const mapStateToProps = ({ journal: {journalInput} }) => ({
  journalInput
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (value) => {
      dispatch(changeInputValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputHandler);
