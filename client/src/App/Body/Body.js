import axios from 'axios';
import React from "react";
import { useCookies } from "react-cookie";
import LoginPage from "./LoginPage/LoginPage";
import UserPanel from "./UserPanel/UserPanel";

function Body() {
    const [cookies, setCookie, removeCookies] = useCookies(["user"]);

    function handleLogin(user) {
        axios.post('http://localhost:3001/api/login', user)
            .then((res) => {
                if (res.data != null) {
                    setCookie("user", JSON.parse(res.data));
                }
                else{
                    setCookie("user", user);
                }
            })
            .catch(err => {
                console.error(err);

            });
    }

    function handleLogout(user) {
        removeCookies("user", user);
    }

    return (
        <>
            {cookies.user ? (
                <UserPanel user={cookies.user} onLogout={handleLogout} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </>
    );
}

export default Body;