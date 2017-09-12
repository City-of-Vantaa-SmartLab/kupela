import React from 'react';
import { connect } from 'react-redux';
import { sendMessages } from '../../reducer/ozadmin/actions';
import { sendMessage, sendOzCommand } from '../../reducer/serverConnection/actions';

const ButtonArea = (props) =>
  <div className='buttonArea'>
    <p>Buttons for application management:</p>
    <div className="ozbuttontextarea">
      <p className="oztext">ACTIVATE VARIA MISSION</p>
      <input className="oz-btn" type="button" onClick={props.clickActivateMission()} value="ACTIVATE MISSION"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND FIRST MESSAGESET, 12:30, HÄLYTYS</p>
      <input className="oz-btn" type="button" onClick={props.clickSendMessageSet(1)} value="SEND MESSAGES"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND SECOND MESSAGES, 12:35, EKA AUTO MATKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendMessageSet(2)} value="SEND MESSAGES"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">CHANGE ARRIVAL, 12:37, EKA PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickChangeArrival()} value="CHANGE ARRIVAL"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND THIRD MESSAGES, 12:39, EKA PAIKALLA, TOINEN MATKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendMessageSet(3)} value="SEND MESSAGES"/>
    </div>
  </div>;

const mapStateToProps = (ozbutton) => ({
  ozbutton
});

const mapDispatchToProps = dispatch => ({
  clickActivateMission(){
    return () => {
      var data = {};
      data.type = "activation";
      data.command = "mission";
      dispatch(sendOzCommand(data));

      console.log("Activate mission clicked!");
    }
  },
  clickSendMessageSet(setNo){
    return () => {
      var data = {};
      data.type = "send";
      data.command = "messages";
      data.noOfSet = setNo;
      dispatch(sendOzCommand(data));

      console.log("Send messages " + setNo + " clicked!");
    }
  },
  clickChangeArrival(){
    return () => {
      var data = {};
      data.type = "activation";
      data.command = "arrival";
      dispatch(sendOzCommand(data));

      console.log("Arrival change clicked!");
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonArea);
