import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { userContext } from "../UserContext";

function Header() {
  const { userInfo, setUserInfo } = useContext(userContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((response) => {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUserInfo]);

  function logout(event) {
    event.preventDefault();

    fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  return (
    <header>
      <Link to="" className="logo">
        Edu Advisor
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/advisors">Advisors</Link>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
