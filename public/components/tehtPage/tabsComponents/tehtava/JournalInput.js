import React from 'react';
import { connect } from 'react-redux';
import InputHandler from './InputHandler';
import { sendJournalInput } from '../../../../reducer/serverConnection/actions';


const JournalInput = (props) =>
  <div className="journalInputArea">
    <p className="journalInputText">Viesti Tilannepäiväkirjaan:</p>
    <InputHandler/>
    <input type="button" className="journalInputButton" onClick={props.sendMessage(props.journalInput.inputValue, props.user.uservalue)} value="Lähetä viesti"/>
  </div>;

const mapStateToProps = ({journal: {journalInput}, user}) => ({
  journalInput,
  user
});

const mapDispatchToProps = dispatch => ({
  sendMessage(message, unit) {
    return() => {
      dispatch(sendJournalInput(message, unit));
    }
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(JournalInput);
