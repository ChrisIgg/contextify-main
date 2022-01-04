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
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "5rem",
    wrap: "flex-wrap",
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
                Signup
              </Link>
            </>
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
          Time
        </Link>
      </div>
    </header>
  );
};

export default Header;
