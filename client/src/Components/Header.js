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
        {username && userInfo?.role === 'Candidate' && (
          <>
            <Link className="font-bold" to="/advisors">
              Advisors
            </Link>
            <Link className="font-bold" to="/selectGraduates">
              Graduates
            </Link>
            <Link className="font-bold" to="/create">
              Create new post
            </Link>
            <Link className="font-bold" to="/introduce">
              Start University Quiz
            </Link>
            <Link className="font-bold" to="/results">
              Quiz Results
            </Link>
            <a className="font-bold" onClick={logout}>
              Logout
            </a>
          </>
        )}
        {username && (userInfo?.role === 'Graduate' || userInfo?.role === 'Advisor') && (
          <>
            <Link className="font-bold" to="/userMessageList">Messages</Link>
            <a className="font-bold" onClick={logout}>Logout</a>
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
