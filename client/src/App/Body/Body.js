import axios from 'axios';
import React from "react";
import { useCookies } from "react-cookie";
import LoginPage from "./LoginPage/LoginPage";
import UserPanel from "./UserPanel/UserPanel";

function Body() {
    const [cookies, setCookie, removeCookies] = useCookies(["user"]);

    function handleLogin(user) {
        //setCookie("user", user);
        let book = {
            BookId: 1,
            Title: "coolBook",
            Author: "Me"
        }

        axios
            .post('http://localhost:3001/api/create', book)
            .then(() => console.log('Book Created'))
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