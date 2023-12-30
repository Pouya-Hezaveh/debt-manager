import React from "react";
import { useCookies } from "react-cookie";
import LoginPage from "./LoginPage.js";
import UserPanel from "./UserPanel/UserPanel.js";

function Body() {
    const [cookies, setCookie] = useCookies(["user"]);

    function handleLogin(user) {
        setCookie("user", user, { path: "/" });
    }

    return (
        <>
            {cookies.user ? (
                <UserPanel user={cookies.user} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </>
    );
}

export default Body;