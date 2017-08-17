import React from 'react';
import { connect } from 'react-redux';
import { initSocketVersion, sendMessage, getSomeMessages } from '../../reducer/serverConnection/actions';
import { changeText } from '../../reducer/textvalues/actions';

const UserButtons = (props) =>
  <div className='userButtonArea'>

    <p>Valitse toimija:</p>
    <input className="user-btn" type="button" onClick={props.clickSelectTike()} value="Tilannekeskus"/>
    <input className="user-btn" type="button" onClick={props.clickSelectKentta()} value="Kenttähenkilöstö"/>
  </div>;

  const mapDispatchToProps = dispatch => ({
    clickSelectTike(){
      return () => {
        dispatch(initSocketVersion('true'));
        dispatch(getSomeMessages('Thank you!'));
        dispatch(changeText("This is new text row"));
      }
    },
    clickSelectKentta(){
      return () => {
        dispatch(initSocketVersion('false'));
      }
    }
  });

  export default connect(null, mapDispatchToProps)(UserButtons);
