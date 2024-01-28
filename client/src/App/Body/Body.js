import axios from 'axios';
import { useCookies } from "react-cookie";
import { api_address } from "../../config";
import LoginPage from "./LoginPage/LoginPage";
import UserPanel from "./UserPanel/UserPanel";

function Body() {
    const [cookies, setCookie, removeCookies] = useCookies(['account']);

    function handleLogin(user) {
        console.log(user);
        axios.post(`${api_address}/api/login`, user).then((res) => {
            console.log("recieved data from Login API: ", res.data)
            console.log("Type of that data: ", typeof res.data)
            if (res.data == null)
                alert("شناسه کاربری یا گذرواژه اشتباه می‌باشد.")
            else
                setCookie('account', res.data)
        });
        //setCookie('account', {id: 'admin', password: '123', name: 'Pouya', type: 'ADMIN'});
    }

    function handleLogout() {
        removeCookies('account');
    }

    return (
        <>
            {cookies.account ? (
                <UserPanel account={cookies.account} onLogout={handleLogout} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </>
    );
}

export default Body;