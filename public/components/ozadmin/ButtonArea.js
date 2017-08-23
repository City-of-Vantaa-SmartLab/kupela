import React from 'react';
import { connect } from 'react-redux';
import { sendMessages } from '../../reducer/ozadmin/actions';
import { sendMessage } from '../../reducer/serverConnection/actions';

const ButtonArea = (props) =>
  <div className='buttonArea'>
    <p>OZ buttons will be here</p>
    <input className="oz-btn" type="button" onClick={props.clickSendMessages()} value="Placeholder Messages"/>
  </div>;

const mapStateToProps = (ozbutton) => ({
  ozbutton
});

const mapDispatchToProps = dispatch => ({
  clickSendMessages(){
    return () => {
      dispatch(sendMessage("test message"));

      console.log("Dispatched sendMessages(message)");
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonArea);
