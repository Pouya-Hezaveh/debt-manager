import React, { useState } from "react";
import LabelText from "../../../components/LabelText";
import '../../../index.css';
import './LoginPage.css';
import logo from './logo.svg';

function LoginPage({ onLogin }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    // | | |  Be khatere naneveshtane in yek khat code ke hanoozam nemidoonam
    // V V V  daghighan chikar mikone ghashang yek hafte kamel az zendegim be fana raft.
    event.preventDefault();
    //^^^^^^^^^^^^^^^^^^^^^
    onLogin({ id, password });
  }

  return (
    <>
      <img src={logo} className="App-logo vibrating-rotating-element" alt="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <LabelText theText={'شناسه کاربری (کد ملی)'} />
          <input
            id="name"
            type="text"
            value={id}
            className="text-area"
            autoComplete="username"
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
            autoComplete="current-password"
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