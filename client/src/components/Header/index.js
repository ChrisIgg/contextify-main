import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import "../../styles/Header.css";
import "../../styles/Buttons.css";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  login: {
    justifyContent: "flex-end",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "5rem",
    wrap: "flex-wrap",
  },
  buttonFont: {
    fontFamily: "Ubuntu, sans-serif",
  },
};
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div style={styles.header}>
        <div>
          {Auth.loggedIn() ? (
            <>

              <Link className="proj-btn" to="/me">

              <Link
                className="btn btn-lg btn-primary m-2"
                to="/me"
                style={styles.buttonFont}
              >

                View My Profile
              </Link>
              <button className="proj-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (

            <>
              <Link className="proj-btn" to="/login">
                Login
              </Link>
              <Link className="signup-btn" to="/signup">

            <div style={styles.login}>
              <Link
                className="btn btn-lg btn-primary m-2"
                to="/login"
                style={styles.buttonFont}
              >
                Login
              </Link>
              <Link
                className="btn btn-lg btn-light m-2"
                to="/signup"
                style={styles.buttonFont}
              >

                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
      <h1 class="proj-title">Contextify</h1>
      <div style={styles.links}>

        <Link className="proj-btn" to="/weight">
          Weight
        </Link>
        <Link className="proj-btn" to="/distance">
          Distance
        </Link>
        <Link className="proj-btn-time" to="/time">

        <Link
          className="btn btn-lg btn-primary m-2"
          to="/weight"
          style={styles.buttonFont}
        >
          Weight
        </Link>
        <Link
          className="btn btn-lg btn-primary m-2"
          to="/distance"
          style={styles.buttonFont}
        >
          Distance
        </Link>
        <Link
          className="btn btn-lg btn-primary m-2"
          to="/time"
          style={styles.buttonFont}
        >

          Time
        </Link>
      </div>
    </header>
  );
};

export default Header;
