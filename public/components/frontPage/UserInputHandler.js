import React from 'react';
import { connect } from 'react-redux';
import { changeInputValue } from '../../reducer/user/actions';

const UserInputHandler = (props) =>
  <div>
    <p>Yksikkö </p>
    <input type="text" className="journalInput" value={props.user.uservalue} onChange={(event) => props.handleChange(event.target.value)}/>
  </div>;

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (value) => {
      dispatch(changeInputValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputHandler);
