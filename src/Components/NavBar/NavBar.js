import "./NavBar.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vinyl from "../../images/logoRockNyl.png";
import { AuthContext } from "../../contexts/authContext";
import { Button } from "../Button";

export function NavBar() {
  const { loggedInUser } = useContext(AuthContext);
  const [loginState, setLoginState] = useState(loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    setLoginState(loggedInUser);
  }, [loggedInUser]);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoginState(null);
    navigate("/");
  }
  return (
    <nav className="navClass bg-white py-4 dark:bg-gray-800 px-5 w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-center mx-auto">
        <div className="w-60 flex items-center justify-around">
          <div>
            <img className="w-14" src={vinyl} alt="discImg"></img>
          </div>
          <div className="titleNav ">
            <Link className="linkHover text-white hover:text-amber-400 text-5xl" to="/#">
              Rock'Nyl
            </Link>
          </div>
        </div>
        <ul className="textRobot flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
          <li>
            <Link
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-amber-400"
              to="/artists-list"
            >
              Shop By Artist
            </Link>
          </li>

          <li>
            <Link
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-amber-400"
              to="/albuns-list"
            >
              Shop By Album
            </Link>
          </li>

          <li>
            {loginState ? (
              <Link
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-amber-400 "
                to="/myAccount"
              >
                My Account
              </Link>
            ) : (
              <Link
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                  md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-amber-400"
                to="/login"
              >
                Login
              </Link>
            )}
          </li>

          <li>
            {loginState ? (
              <Button
                type="button"
                className="btnLogout bg-red-800 hover:bg-red-600 text-white font-bold rounded focus:outline-none focus:shadow-outline p-1/2 px-1"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            ) : (
              <Link
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-amber-400"
                to="/signup"
              >
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
