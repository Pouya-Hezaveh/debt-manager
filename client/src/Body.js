import React from "react";
import { useCookies } from "react-cookie";
import LoginPage from "./LoginPage.js";
import UserPanel from "./UserPanel/UserPanel.js";

function Body() {
    const [cookies, setCookie, removeCookies] = useCookies(["user"]);

    function handleLogin(user) {
        setCookie("user", user);
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