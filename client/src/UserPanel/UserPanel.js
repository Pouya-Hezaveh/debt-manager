import React from 'react';
import './UserPanel.css';
import UserPanelHead from './UserPanelHead';

function UserPanel({ user, onLogout }) {

    return (
        <>
            <UserPanelHead user={user} onLogout={onLogout} />
        </>
    );
}

export default UserPanel;