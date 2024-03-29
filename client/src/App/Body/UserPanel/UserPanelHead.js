import React from 'react';
import LabelText from '../../../components/LabelText';
import '../../../index.css';
import '../../App.css';
import './UserPanelHead.css';
import logout_logo from './logout.svg';

function UserPanelHead({ account, onLogout }) {
  
  return (
    <div className="App-header">
      <div className='account-bar'>
        <button className="logout-button" onClick={onLogout}>
          <img src={logout_logo} className='logout-logo' alt="logout" />
        </button>
        <div className="username">
          <LabelText theText={'نام کاربر: '+account.name} fontSize={"0.8em"} margin={"15px"}/>
        </div>
          <p className="persian-text message">به پنل خود خوش آمدید!</p>
      </div>
    </div>
  );
}

export default UserPanelHead;