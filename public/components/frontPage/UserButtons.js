import React from 'react';
import { connect } from 'react-redux';
import UserInputHandler from './UserInputHandler';
import { initSocketVersion, sendMessage, getSomeMessages } from '../../reducer/serverConnection/actions';
import { changeText } from '../../reducer/textvalues/actions';

const UserButtons = (props, {profile}) =>
  <div className='userButtonArea'>

    <p className="userInputTitle">Valitse toimija {getSelectedUserType(props.user.usertype)}</p>
    <input type="button" className="user-btn" onClick={props.clickSelectTike()} value="Tilannekeskus"/>
    <input type="button" className="user-btn" onClick={props.clickSelectKentta()} value="Kenttähenkilöstö"/>
    <UserInputHandler/>
  </div>;

const mapStateToProps = ({mission: { profile }, user}) => ({
  profile,
  user
});

const mapDispatchToProps = dispatch => ({
  clickSelectTike(){
    return () => {
      dispatch(initSocketVersion('true'));
    }
  },
  clickSelectKentta(){
    return () => {
      dispatch(initSocketVersion('false'));
    }
  }
});

function getSelectedUserType(current){
  if(current == "default"){
    return "(Ei valittu)";
  }
  else if(current == "tike"){
    return "(Tilannekeskus)";
  }
  else {
    return "(Kenttähenkilöstö)";
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserButtons);
