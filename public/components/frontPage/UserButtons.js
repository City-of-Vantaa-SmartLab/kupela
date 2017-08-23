import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { initSocketVersion, sendMessage, getSomeMessages } from '../../reducer/serverConnection/actions';
import { changeText } from '../../reducer/textvalues/actions';

const UserButtons = (props, {profile}) =>
  <div className='userButtonArea'>

    <p>Valitse toimija:</p>
    <h1 className="user-btn" onClick={props.clickSelectTike()} value="Tilannekeskus"><Link to={'/tehtavat/'}>Tilannekeskus</Link></h1>
    <h1 className="user-btn" onClick={props.clickSelectKentta()} value="Kenttähenkilöstö"><Link to={'/tehtavat/'}>Kenttähenkilöstö</Link></h1>
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
