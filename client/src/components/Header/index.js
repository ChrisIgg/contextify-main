import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

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
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            Contextify
          </h1>
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link
                className="btn btn-lg btn-primary m-2"
                to="/me"
                style={styles.buttonFont}
              >
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
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
      <div style={styles.links}>
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
