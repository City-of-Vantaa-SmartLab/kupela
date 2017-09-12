import React from 'react';
import { connect } from 'react-redux';
import InputHandler from './InputHandler';
import { sendJournalInput } from '../../../../reducer/serverConnection/actions';


const JournalInput = (props) =>
  <div className="journalInputArea">
    <div className="textInputArea">
      <p className="journalInputText">Viesti Tilannepäiväkirjaan:</p>
      <InputHandler/>
      <input type="button" className="journalInputButton" onClick={props.sendMessage(props.journalInput.inputValue, props.user.uservalue)} value="Lähetä viesti"/>
    </div>
    <div className="messageButtonArea">
      <input type="button" className="journalInputButton" onClick={props.sendMessage("Yksikkö matkalla!", props.user.uservalue)} value="YKSIKKÖ MATKALLA"/>
      <input type="button" className="journalInputButton" onClick={props.sendMessage("Yksikkö kohteessa!", props.user.uservalue)} value="YKSIKKÖ KOHTEESSA"/>
      <input type="button" className="journalInputButton" onClick={props.sendMessage("Tehtävä suoritettu!", props.user.uservalue)} value="TEHTÄVÄ SUORITETTU"/>
    </div>
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
