import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userContext } from "../UserContext";

function Header() {
  const { userInfo, setUserInfo } = useContext(userContext);
  const navigate = useNavigate();
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
    navigate("/");
  }

  const username = userInfo?.username;
  return (
    <div className="w-full start-0 flex justify-around items-center mb-[90px] mt-[30px] border-b border-b-orange-800 pb-4">
      <Link to="/" className="-m-1 p-1 flex gap-2 items-center">
        <img class="h-[90px]" src="asd12.PNG" alt=""></img>
        <h1 className="text-xl font-bold">Edu Advisor</h1>
      </Link>

      <div className="flex gap-5">
        {username && userInfo?.role === "Candidate" && (
          <>
            <Link className="hover:font-bold" to="/advisors">
              Advisors
            </Link>
            <Link className="hover:font-bold" to="/selectGraduates">
              Graduates
            </Link>

            <Link className="hover:font-bold" to="/introduce">
              Start University Quiz
            </Link>
            <Link className="hover:font-bold" to="/results">
              Quiz Results
            </Link>
            <Link className="hover:font-bold" to="/create">
              Create new post
            </Link>
            <Link className="hover:font-bold" to="/posts">
              Forum Posts
            </Link>
          </>
        )}
      </div>
      <div>
        {username && userInfo?.role === "Candidate" && (
          <div className="p-2 bg-red-600 rounded-xl hover:bg-red-400 hover:text-white cursor-pointer flex gap-1">
            <a className="font-bold" onClick={logout}>
              Logout
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        )}
      </div>

      {username &&
        (userInfo?.role === "Graduate" || userInfo?.role === "Advisor") && (
          <>
            <Link className="font-bold" to="/userMessageList">
              Messages
            </Link>
            <div className="p-3 bg-red-600 rounded-xl hover:bg-red-400 hover:text-white cursor-pointer flex gap-1">
              <a className="font-bold" onClick={logout}>
                Logout
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </>
        )}
      {!username && (
        <div className="flex gap-5">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
