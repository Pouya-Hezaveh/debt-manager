import React, { useState } from "react";
import './LoginPage.css';
import './index.css';
import logo from './logo.svg';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    onLogin({ username, password });
  }

  return (
    <>
      <img src={logo} className="App-logo vibrating-rotating-element" alt="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <p className="text-persian text-shadow">
            شناسه کاربری
          </p>
          <input
            type="text"
            value={username}
            className="text-area"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <p className="text-persian text-shadow">
            گذرواژه
          </p>
          <input
            type="password"
            value={password}
            className="text-area"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input className="button" type="submit" value="ورود" />
      </form>
    </>
  );
}

export default LoginPage;