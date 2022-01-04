import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import "../../styles/Header.css";
import "../../styles/button.css";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  login: {
    justifyContent: "flex-start",
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
          {/* <h1 className="m-0" style={{ fontSize: "3rem" }}>
            Contextify
          </h1> */}
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="" to="/me" style={styles.buttonFont}>
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <div style={styles.login}>
              <Link className="proj-btn" to="/login" style={styles.buttonFont}>
                Login
              </Link>
              <Link
                className="signup-btn"
                to="/signup"
                style={styles.buttonFont}
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
      <h1 className="proj-title">Contextify</h1>
      <div style={styles.links}>
        <Link className="proj-btn" to="/weight" style={styles.buttonFont}>
          Weight
        </Link>
        <Link className="proj-btn" to="/distance" style={styles.buttonFont}>
          Distance
        </Link>
        <Link className="proj-btn-time" to="/time" style={styles.buttonFont}>
          Time
        </Link>
      </div>
    </header>
  );
};

export default Header;
