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
    <p className="oztext">PLACEHOLDER TEXT</p>
    <input className="oz-btn" type="button" onClick={props.clickSendMessages()} value="Placeholder Messages"/>
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
  clickSendMessages(){
    return () => {
      dispatch(sendMessage("test message"));

      console.log("Dispatched sendMessages(message)");
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonArea);
