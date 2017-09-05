import React from 'react';
import { connect } from 'react-redux';
import { initSocketVersion, sendMessage, getSomeMessages } from '../../reducer/serverConnection/actions';
import { changeText } from '../../reducer/textvalues/actions';

const UserButtons = (props, {profile}) =>
  <div className='userButtonArea'>

    <p>Valitse toimija:</p>
    <input type="button" className="user-btn" onClick={props.clickSelectTike()} value="Tilannekeskus"/>
    <input type="button" className="user-btn" onClick={props.clickSelectKentta()} value="Kenttähenkilöstö"/>
  </div>;

const mapStateToProps = ({mission: { profile }}) => ({
  profile
});

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

export default connect(mapStateToProps, mapDispatchToProps)(UserButtons);
