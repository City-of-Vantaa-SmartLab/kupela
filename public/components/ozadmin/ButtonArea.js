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
      <p className="oztext">SEND FIRST MESSAGESET, 12:35, HÄLYTYS</p>
      <input className="oz-btn" type="button" onClick={props.clickSendMessageSet(1)} value="SEND MESSAGES 1"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND FIRST NEWSSET, 12:35, HÄLYTYS</p>
      <input className="oz-btn" type="button" onClick={props.clickSendNewsSet(1)} value="SEND NEWS 1"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">CHANGE SMOKE, 12:38, KAIKKI MATKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickChangeUrl("smoke", "../../../../resources/images/27Pohjapiirros-sahkosiipi-savu2.png")} value="CHANGE SMOKE 1"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">CHANGE ARRIVAL, 12:38, EKA PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickChangeArrival()} value="CHANGE ARRIVAL"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND FIRST IMAGESET, 12:39, EKA AUTO PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendImageSet(1)} value="SEND IMAGES 1"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND SECOND MESSAGES, 12:40, EKA AUTO PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendMessageSet(2)} value="SEND MESSAGES 2"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND THIRD MESSAGES, 12:43, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendMessageSet(3)} value="SEND MESSAGES 3"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND SECOND NEWSSET, 12:43, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendNewsSet(2)} value="SEND NEWS 2"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">CHANGE SMOKE, 12:43, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickChangeUrl("smoke", "../../../../resources/images/27Pohjapiirros-sahkosiipi-savu3.png")} value="CHANGE SMOKE 2"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND FOURTH MESSAGES, 12:45, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendMessageSet(4)} value="SEND MESSAGES 4"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND THIRD NEWSSET, 12:46, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendNewsSet(3)} value="SEND NEWS 3"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND SECOND IMAGESET, 12:50, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendImageSet(2)} value="SEND IMAGES 2"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">CHANGE MOTION, 12:50, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickChangeUrl("motion", "../../../../resources/images/22Pohjapiirros-sahkosiipi-liiketun-molemmat.png")} value="CHANGE MOTION"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">CHANGE MOTION ROUTE, 12:50, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickChangeUrl("routeMotion", "../../../../resources/images/15Pohjapiirros-sahkosiipi-staattiset-kaikki+halytin+liiketun-oikvas-reitti5.png")} value="CHANGE MOTION ROUTE"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND FOURTH NEWSSET, 13:00, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendNewsSet(4)} value="SEND NEWS 4"/>
    </div>
    <div className="ozbuttontextarea">
      <p className="oztext">SEND FIFTH NEWSSET, 13:15, KAIKKI PAIKALLA</p>
      <input className="oz-btn" type="button" onClick={props.clickSendNewsSet(5)} value="SEND NEWS 5"/>
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
  clickSendNewsSet(setNo){
    return () => {
      var data = {};
      data.type = "send";
      data.command = "news";
      data.noOfSet = setNo;
      dispatch(sendOzCommand(data));

      console.log("Send news " + setNo + " clicked!");
    }
  },
  clickSendImageSet(setNo){
    return () => {
      var data = {};
      data.type = "send";
      data.command = "images";
      data.noOfSet = setNo;
      dispatch(sendOzCommand(data));

      console.log("Send images " + setNo + " clicked!");
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
