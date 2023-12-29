import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import LoginPage from "./LoginPage.js";
import WelcomePage from "./WelcomePage.js";

function Body() {
    const [cookies, setCookie] = useCookies(["user"]);

    function handleLogin(user) {
        setCookie("user", user, { path: "/" });
    }

    return (
        <CookiesProvider>
            <div>
                {cookies.user ? (
                    <WelcomePage user={cookies.user} />
                ) : (
                    <LoginPage onLogin={handleLogin} />
                )}
            </div>
        </CookiesProvider>
    );
}

export default Body;