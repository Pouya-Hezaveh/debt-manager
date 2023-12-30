import React from 'react';
import './UserPanel.css';

function UserPanelHead({ user }) {
  return (
    <>
      <h3>Welcome, {user.username}!</h3>
    </>
  );
}

export default UserPanelHead;