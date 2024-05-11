import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

//components
import UserFavicon from "../userFavicon/UserFavicon";
import SignUp from "../signUp/SignUpComponent";
import Login from "../logIn/LogInComponent";
import { userContext } from "../../context/userContext";

import TEST_ID from "../Nav.testid";

const Nav = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(userContext);

  useEffect(() => {
    if (isLoggedIn) {
      setShowLoginForm(false);
      setShowSignUpForm(false);
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="navbar">
        <ul className="navbar-items">
          <li className="navbar-item">
            <Link
              to="/"
              data-testid={TEST_ID.linkToHome}
              className="navbar-link"
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/user"
              data-testid={TEST_ID.linkToUsers}
              className="navbar-link"
            >
              Users
            </Link>
          </li>
          <li
            className={"navbar-item login-btn" + (isLoggedIn ? " hide" : "")}
            onClick={() => {
              if (showSignUpForm) {
                setShowSignUpForm(!showSignUpForm);
              }
              setShowLoginForm(!showLoginForm);
            }}
          >
            <a href="#" className="navbar-link">
              Log In
            </a>
          </li>
          <li
            className={"navbar-item signUp-btn" + (isLoggedIn ? " hide" : "")}
            onClick={() => {
              if (showLoginForm) {
                setShowLoginForm(!showLoginForm);
              }
              setShowSignUpForm(!showSignUpForm);
            }}
          >
            <a href="#" className="navbar-link">
              Sign Up
            </a>
          </li>
          <li
            className={"navbar-item logOut-btn" + (!isLoggedIn ? " hide" : "")}
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            <a href="#" className="navbar-link">
              Log Out
            </a>
          </li>
          <UserFavicon />
        </ul>
      </div>
      <Login
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
      />
      <SignUp
        showSignUpForm={showSignUpForm}
        setShowSignUpForm={setShowSignUpForm}
      />
    </>
  );
};

export default Nav;
