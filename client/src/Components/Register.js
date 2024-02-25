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
      <h1 className="text-white font-bold mb-4">Register</h1>
      <div>
        <label htmlFor="" className="text-white mb-1 text-xs block ml-3">Username</label>
        <input
          type="text"
          name=""
          placeholder="username"
          className="mb-5 w-full h-12 bg-zinc-800 rounded-xl border-black text-white"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
      />
      </div>
      
      <div>
        <label htmlFor="" className="text-white mb-1 text-xs block ml-3">Username</label>

        <input
          type="password"
          name=""
          placeholder="password"
          className="mb-5 w-full h-12 bg-zinc-800 rounded-xl border-black text-white"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      
      <div className="buttonHolder">
        <button>Register</button>
      </div>
    </form>
  );
}

export default Register;
