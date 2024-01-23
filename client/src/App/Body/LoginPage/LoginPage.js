import React, { useState } from "react";
import LabelText from "../../../components/LabelText";
import '../../../index.css';
import './LoginPage.css';
import logo from './logo.svg';

function LoginPage({ onLogin }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    onLogin({ id, password });
  }

  return (
    <>
      <img src={logo} className="App-logo vibrating-rotating-element" alt="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <LabelText theText={'شناسه کاربری'} />
          <input
            id="name"
            type="text"
            value={id}
            className="text-area"
            autocomplete="username"
            onChange={(e) => setId(e.target.value)}
            
          />
        </label>
        <br />
        <label>
          <LabelText theText={'گذرواژه'} />
          <input
            id="password"
            type="password"
            value={password}
            className="text-area"
            autocomplete="current-password"
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