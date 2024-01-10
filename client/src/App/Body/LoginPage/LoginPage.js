import React, { useState } from "react";
import '../../../index.css';
import './LoginPage.css';
import logo from './logo.svg';

function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    onLogin({ name, password });
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
            value={name}
            className="text-area"
            onChange={(e) => setName(e.target.value)}
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