import React from 'react';
import './AdminPanel/AdminPanel';
import AdminPanel from './AdminPanel/AdminPanel.js';
import ClientPanel from './ClientPanel/ClientPanel.js';
import UserPanelHead from './UserPanelHead';

function UserPanel({ user, onLogout }) {

    return (
        <>
            <UserPanelHead user={user} onLogout={onLogout} />
            {user.type === 'ADMIN'?
                <AdminPanel/>
                :
                <ClientPanel/>
            }
        </>
    );
}

export default UserPanel;