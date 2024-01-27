import React, { useEffect } from 'react';
import AdminPanel from './AdminPanel/AdminPanel.js';
import ClientPanel from './ClientPanel/ClientPanel.js';
import UserPanelHead from './UserPanelHead';

function UserPanel({ account, onLogout }) {

    useEffect(() => {
        console.log(">==> the account info that is passed to UserPannel component: ", account);
    }, [account])

    return (
        <>
            <UserPanelHead account={account} onLogout={onLogout} />
            {account.type === 'ADMIN' ?
                <AdminPanel />
                :
                <ClientPanel />
            }
        </>
    );
}

export default UserPanel;