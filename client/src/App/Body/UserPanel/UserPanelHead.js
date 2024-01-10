import React from 'react';
import '../../../index.css';
import '../../App.css';
import './UserPanelHead.css';
import logout_logo from './logout.svg';

function UserPanelHead({ user, onLogout }) {
  return (
    <div className='App-header'>
      <button class="button button-logout" onClick={onLogout}>
        <img src={logout_logo} className='logout-logo' alt="logout" />
      </button>
      <h1>Welcome, {user.name}!</h1>
    </div>
  );
}

export default UserPanelHead;