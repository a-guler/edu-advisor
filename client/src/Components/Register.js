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
    <div className="flex items-center justify-center ">
      <div className="rounded-xl p-10 bg-white">
        <form className="register" onSubmit={register}>
          <h1 className="mb-[50px] text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Register
          </h1>
          <input
            className="postInput"
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            className="postInput"
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
      </div>
    </div>
  );
}

export default Register;
