import React from 'react';
import './AdminPanel/AdminPanel';
import AdminPanel from './AdminPanel/AdminPanel.js';
import ClientPanel from './ClientPanel/ClientPanel.js';
import UserPanelHead from './UserPanelHead';

function UserPanel({ account, onLogout }) {

    return (
        <>
            <UserPanelHead account={account} onLogout={onLogout} />
            {account.type === 'ADMIN'?
                <AdminPanel/>
                :
                <ClientPanel/>
            }
        </>
    );
}

export default UserPanel;