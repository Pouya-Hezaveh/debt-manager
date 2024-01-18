import React from "react";
import { useCookies } from "react-cookie";
import { postToBackend } from "../../userApi";
import LoginPage from "./LoginPage/LoginPage";
import UserPanel from "./UserPanel/UserPanel";

function Body() {
    const [cookies, setCookie, removeCookies] = useCookies(["user"]);

    function handleLogin(user) {
        postToBackend(user);
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