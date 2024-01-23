import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import LoginPage from "./LoginPage/LoginPage";
import UserPanel from "./UserPanel/UserPanel";

function Body() {
    const [cookies, setCookie, removeCookies] = useCookies(["account"]);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        if (account == null)
            removeCookies("account")
        else
            setCookie("account", account);
    }, [account, removeCookies, setCookie]);

    function handleLogin(user) {
        axios.post('http://localhost:3001/api/login', user)
            .then((res) => {
                setAccount(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });
        /*
        axios.post('http://localhost:3001/api/login', user)
            .then((res) => {
                if (res.data != null) {
                    setAccount(res.data)
                    setCookie("account", account);
                }
            })
            .catch(err => {
                console.error(err);
            });
        */
        /*
         setAccount(axios.post('http://localhost:3001/api/login', user).data)
         setCookie("account", account)
         */
    }

    function handleLogout(account) {
        removeCookies("account", account);
        setAccount(null);
    }

    return (
        <>
            {cookies.account ? (
                <UserPanel user={cookies.account} onLogout={handleLogout} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </>
    );
}

export default Body;