import React from 'react';
import { connect } from 'react-redux';
import { sendMessages } from '../../reducer/ozadmin/actions';
import { sendMessage, sendOzCommand } from '../../reducer/serverConnection/actions';

const ButtonArea = (props) =>
  <div className='buttonArea scrollableArea'>
    <p>Buttons for application management:</p>
    <div className="ozbuttontextarea">
      <p className="oztext">RESET EXERCISE</p>
      <input className="oz-btn" type="button" onClick={props.clickReset()} value="RESET"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">ACTIVATE VARIA MISSION</p>
      <input className="oz-btn" type="button" onClick={props.clickActivateMission()} value="ACTIVATE MISSION"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND FIRST MESSAGESET, 12:30, HÄLYTYS</p>
      <input className="oz-btn" type="button" onClick={props.clickSendMessageSet(1)} value="SEND MESSAGES 1"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND SECOND MESSAGES, 12:35, EKA AUTO MATKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendMessageSet(2)} value="SEND MESSAGES 2"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">CHANGE SMOKE, 12:35, KAIKKI MATKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickChangeUrl("smoke", "../../../../resources/images/27Pohjapiirros-sahkosiipi-savu2.png")} value="CHANGE SMOKE 1"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">CHANGE ARRIVAL, 12:37, EKA PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickChangeArrival()} value="CHANGE ARRIVAL"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND THIRD MESSAGES, 12:39, EKA PAIKALLA, TOINEN MATKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendMessageSet(3)} value="SEND MESSAGES 3"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">CHANGE SMOKE, 12:40, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickChangeUrl("smoke", "../../../../resources/images/27Pohjapiirros-sahkosiipi-savu3.png")} value="CHANGE SMOKE 2"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">CHANGE MOTION, 12:50, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickChangeUrl("motion", "../../../../resources/images/22Pohjapiirros-sahkosiipi-liiketun-molemmat.png")} value="CHANGE MOTION"/>
    </div>
  </div>;

const mapStateToProps = (ozbutton) => ({
  ozbutton
});

const mapDispatchToProps = dispatch => ({
  clickReset() {
    return () => {
      var data = {};
      data.type = "reset";
      data.command = "hard";
      dispatch(sendOzCommand(data));
    }
  },
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
  clickChangeUrl(type, url){
    return () => {
      var data = {};
      data.type = "activation";
      data.command = "url";
      data.plantype = type;
      data.url = url;
      dispatch(sendOzCommand(data));

      console.log("URL change clicked!");
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
