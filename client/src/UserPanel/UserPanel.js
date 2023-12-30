import React from 'react';
import './UserPanel.css';
import UserPanelHead from './UserPanelHead';

function UserPanel({ user }) {
    return (
        <UserPanelHead user={user} />
    );
}

export default UserPanel;
