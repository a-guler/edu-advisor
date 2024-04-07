import React, { useContext } from "react";
import { useState } from "react";
import { api } from "./api";
import { Navigate } from "react-router-dom";
import { userContext } from "../UserContext";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loginType, setLoginType] = useState("Candidate")
  const { setUserInfo } = useContext(userContext);
  // const login = (event) => {
  //   event.preventDefault();
  //   api()
  //     .post("/login", {
  //       username,
  //       password,
  //     })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setRedirect(true);
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         alert(error.response.data);
  //       }
  //     });
  // };

  const login = async (event) => {
    event.preventDefault();
    if (loginType === 'Candidate'){
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
        });
        setRedirect(true);
      } else {
        alert("Wrong credentials");
      }
    } else if (loginType === 'Advisor'){
      const response = await fetch("http://localhost:4000/loginAdvisor", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      console.log(response.ok)
      
      if (response.ok) {
        response.json().then((userInfo) => {
          console.log(userInfo)
          setUserInfo(userInfo);
        });
        setRedirect(true);
      } else {
        alert("Wrong credentials");
      }
    }
    
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className="login" onSubmit={login}>
      <h1 className="mb-[50px] text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Login
      </h1>
      <FormControl fullWidth>
        <InputLabel id="test-select-label">User Type</InputLabel>
        <Select
          labelId="test-select-label"
          id="demo-simple-select"
          value={loginType}
          label="User Type"
          onChange={(e) => setLoginType(e.target.value)}
        >
          <MenuItem value={"Candidate"}>Candidate</MenuItem>
          <MenuItem value={"Graduate"}>Graduate</MenuItem>
          <MenuItem value={"Advisor"}>Advisor</MenuItem>
        </Select>
      </FormControl>
      <input
        className="postInput mt-3"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        className="postInput"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="buttonHolder">
        <button>Login</button>
      </div>
    </form>
  );
}

export default Login;
