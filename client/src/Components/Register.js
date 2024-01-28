import React, { useState } from "react";
import { api } from "./api";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = (event) => {
    event.preventDefault();
    api()
      .post("/register", {
        username: username,
        password: password,
      })
      .then((response) => {
        alert("Registration successfull");
      })
      .catch((err) => {
        alert("Registration failed");
      });
  };

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <div className="buttonHolder">
        <button>Register</button>
      </div>
    </form>
  );
}

export default Register;
