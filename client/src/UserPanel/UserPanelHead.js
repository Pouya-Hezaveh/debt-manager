import React from 'react';
import '../App.css';
import '../index.css';
import './UserPanel.css';
import logout_logo from './logout.svg';

function UserPanelHead({ user, onLogout }) {
  return (
    <div className='App-header'>
      <button class="button button-logout" onClick={onLogout}>
        <img src={logout_logo} className='logout-logo' alt="logout" /></button>

      <h1>Welcome, {user.username}!</h1>
    </div>
  );
}

export default UserPanelHead;